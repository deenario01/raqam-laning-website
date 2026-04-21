"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  parseLines,
  joinLines,
  slugifyBase,
  uniqueId,
} from "@/lib/admin-form-helpers";
import { pickAndUploadAdminImage } from "@/lib/admin-upload-client";

export default function AdminEditProductPage() {
  const params = useParams();
  const router = useRouter();
  const rawId = params?.id != null ? decodeURIComponent(String(params.id)) : "";
  const isNew = rawId === "new";

  const originalIdRef = useRef(null);
  const [payload, setPayload] = useState(null);
  const [draft, setDraft] = useState(null);
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("");
  const [uploadBusy, setUploadBusy] = useState(false);

  const load = useCallback(async () => {
    const r = await fetch("/api/data/products");
    const data = await r.json();
    setPayload(data);
    if (isNew) {
      originalIdRef.current = null;
      setDraft({
        id: "",
        name: "New product",
        primaryImage: "/assets/img/product/product1.webp",
        description: "",
        features: [],
        applications: [],
      });
      setFeatured(false);
      return;
    }
    const found = data.items?.find((p) => p.id === rawId);
    if (!found) {
      setDraft(null);
      return;
    }
    originalIdRef.current = rawId;
    setDraft({
      ...found,
      features: [...(found.features || [])],
      applications: [...(found.applications || [])],
    });
    setFeatured(Boolean(data.featuredIds?.includes(rawId)));
  }, [isNew, rawId]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSave() {
    if (!payload || !draft) return;
    setStatus("");
    const ids = new Set((payload.items || []).map((p) => p.id));
    const name = draft.name.trim();
    const description = draft.description.trim();
    const primaryImage = draft.primaryImage.trim();
    let id = draft.id.trim();
    const features = Array.isArray(draft.features) ? draft.features.map(String) : parseLines(joinLines(draft.features));
    const applications = Array.isArray(draft.applications)
      ? draft.applications.map(String)
      : parseLines(joinLines(draft.applications));

    if (!name || !primaryImage) {
      setStatus("Name and image are required.");
      return;
    }

    let items = (payload.items || []).map((p) => ({ ...p }));
    let featuredIds = [...(payload.featuredIds || [])];

    if (isNew) {
      id = id || uniqueId(slugifyBase(name), [...ids]);
      if (ids.has(id)) {
        setStatus("That product id already exists. Choose another id.");
        return;
      }
      items.push({ id, name, primaryImage, description, features, applications });
      if (featured) featuredIds = [...new Set([...featuredIds, id])];
    } else {
      const orig = originalIdRef.current;
      const idx = items.findIndex((p) => p.id === orig);
      if (idx < 0) {
        setStatus("Product not found. Go back to the dashboard.");
        return;
      }
      if (!id) {
        setStatus("Product id cannot be empty.");
        return;
      }
      if (id !== orig && items.some((p) => p.id === id)) {
        setStatus("Another product already uses that id.");
        return;
      }
      items[idx] = { id, name, primaryImage, description, features, applications };
      featuredIds = (payload.featuredIds || []).filter((fid) => fid !== orig);
      if (featured) featuredIds = [...new Set([...featuredIds, id])];
    }

    const body = { items, featuredIds };
    const put = await fetch("/api/admin/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    const j = await put.json().catch(() => ({}));
    if (!put.ok) {
      setStatus(j.error || "Save failed. Are you still signed in?");
      return;
    }
    setPayload(j);
    originalIdRef.current = id;
    setDraft({
      ...j.items.find((p) => p.id === id),
      features: [...(j.items.find((p) => p.id === id)?.features || [])],
      applications: [...(j.items.find((p) => p.id === id)?.applications || [])],
    });
    setFeatured(j.featuredIds?.includes(id) ?? false);
    setStatus("Saved.");
    if (isNew) {
      router.replace(`/admin/product/${encodeURIComponent(id)}/`);
    }
  }

  async function handleDelete() {
    if (isNew) {
      router.push("/admin/");
      return;
    }
    if (!payload || !originalIdRef.current) return;
    if (!window.confirm("Delete this product permanently?")) return;
    const orig = originalIdRef.current;
    const items = payload.items.filter((p) => p.id !== orig);
    const featuredIds = payload.featuredIds.filter((fid) => fid !== orig);
    const put = await fetch("/api/admin/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ items, featuredIds }),
    });
    if (!put.ok) {
      const j = await put.json().catch(() => ({}));
      setStatus(j.error || "Delete failed.");
      return;
    }
    router.push("/admin/");
  }

  async function handleUpload() {
    setUploadBusy(true);
    setStatus("");
    try {
      const url = await pickAndUploadAdminImage("products");
      if (url) setDraft((d) => (d ? { ...d, primaryImage: url } : d));
    } catch (e) {
      setStatus(e.message || "Upload failed");
    } finally {
      setUploadBusy(false);
    }
  }

  if (payload === null || draft === null) {
    if (payload && !isNew && draft === null) {
      return (
        <section className="section--padding">
          <div className="container" style={{ maxWidth: "800px" }}>
            <p className="mb-3">Product not found.</p>
            <Link href="/admin/?tab=products" style={{ color: "#666" }}>
              ← Back to products
            </Link>
          </div>
        </section>
      );
    }
    return (
      <section className="section--padding">
        <div className="container text-center py-5">
          <p>Loading…</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section--padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Link href="/admin/?tab=products" className="d-inline-block mb-20" style={{ color: "#666" }}>
            ← Back to products
          </Link>
          <h2 className="section__title--desc mb-25">
            {isNew ? "New product" : `Edit: ${draft.name}`}
          </h2>

          {status ? (
            <p className="mb-20" style={{ color: status === "Saved." ? "#0a0" : "#c00" }}>
              {status}
            </p>
          ) : null}

          <div className="single__widget widget__bg mb-30">
            <h2 className="widget__title position__relative h4 mb-20">Details</h2>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">URL id (slug)</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.id}
                onChange={(e) => setDraft((d) => (d ? { ...d, id: e.target.value } : d))}
                placeholder="auto from name if empty (new product)"
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Name</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.name}
                onChange={(e) => setDraft((d) => (d ? { ...d, name: e.target.value } : d))}
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Image URL</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.primaryImage}
                onChange={(e) => setDraft((d) => (d ? { ...d, primaryImage: e.target.value } : d))}
              />
            </label>
            <button
              type="button"
              className="primary__btn mb-20"
              style={{ background: "#555" }}
              disabled={uploadBusy}
              onClick={handleUpload}
            >
              {uploadBusy ? "Uploading…" : "Upload image"}
            </button>
            <div className="mb-20">
              <img src={draft.primaryImage} alt="" style={{ maxWidth: "240px", height: "auto" }} />
            </div>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Description</span>
              <textarea
                className="widget__search--form__input"
                style={{ width: "100%", minHeight: "120px" }}
                value={draft.description}
                onChange={(e) => setDraft((d) => (d ? { ...d, description: e.target.value } : d))}
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Features (one per line)</span>
              <textarea
                className="widget__search--form__input"
                style={{ width: "100%", minHeight: "100px" }}
                value={joinLines(draft.features)}
                onChange={(e) =>
                  setDraft((d) => (d ? { ...d, features: parseLines(e.target.value) } : d))
                }
              />
            </label>
            <label className="d-block mb-20">
              <span className="d-block mb-8 fw-bold">Applications (one per line)</span>
              <textarea
                className="widget__search--form__input"
                style={{ width: "100%", minHeight: "100px" }}
                value={joinLines(draft.applications)}
                onChange={(e) =>
                  setDraft((d) => (d ? { ...d, applications: parseLines(e.target.value) } : d))
                }
              />
            </label>
            <label className="d-flex align-items-center gap-2 mb-25">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <span>Featured on homepage (Most popular)</span>
            </label>
            <div className="d-flex flex-wrap gap-3">
              <button type="button" className="primary__btn" onClick={handleSave}>
                Save product
              </button>
              {!isNew ? (
                <button type="button" className="primary__btn" style={{ background: "#b33" }} onClick={handleDelete}>
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
