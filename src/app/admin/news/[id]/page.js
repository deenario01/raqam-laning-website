"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { slugifyBase, uniqueId } from "@/lib/admin-form-helpers";
import { pickAndUploadAdminImage } from "@/lib/admin-upload-client";

export default function AdminEditNewsPage() {
  const params = useParams();
  const router = useRouter();
  const rawId = params?.id != null ? decodeURIComponent(String(params.id)) : "";
  const isNew = rawId === "new";

  const originalIdRef = useRef(null);
  const [payload, setPayload] = useState(null);
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState("");
  const [uploadBusy, setUploadBusy] = useState(false);

  const load = useCallback(async () => {
    const r = await fetch("/api/data/news");
    const data = await r.json();
    setPayload(data);
    if (isNew) {
      originalIdRef.current = null;
      setDraft({
        id: "",
        title: "New article",
        date: "",
        image: "/assets/img/blog/blog1.webp",
        excerpt: "",
        tags: [],
        content: "<p></p>",
      });
      return;
    }
    const found = data.items?.find((n) => n.id === rawId);
    if (!found) {
      setDraft(null);
      return;
    }
    originalIdRef.current = rawId;
    setDraft({
      ...found,
      tags: [...(found.tags || [])],
    });
  }, [isNew, rawId]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSave() {
    if (!payload || !draft) return;
    setStatus("");
    const ids = new Set((payload.items || []).map((n) => n.id));
    let id = draft.id.trim();
    const title = draft.title.trim();
    const date = draft.date.trim();
    const image = draft.image.trim();
    const excerpt = draft.excerpt.trim();
    const content = draft.content.trim();
    const tags = Array.isArray(draft.tags)
      ? draft.tags.map(String)
      : String(draft.tags || "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

    if (!title) {
      setStatus("Title is required.");
      return;
    }

    let items = (payload.items || []).map((n) => ({ ...n }));

    if (isNew) {
      id = id || uniqueId(slugifyBase(title), [...ids]);
      if (ids.has(id)) {
        setStatus("That article id already exists. Choose another id.");
        return;
      }
      items.push({ id, title, date, image, excerpt, tags, content });
    } else {
      const orig = originalIdRef.current;
      const idx = items.findIndex((n) => n.id === orig);
      if (idx < 0) {
        setStatus("Article not found.");
        return;
      }
      if (!id) {
        setStatus("Article id cannot be empty.");
        return;
      }
      if (id !== orig && items.some((n) => n.id === id)) {
        setStatus("Another article already uses that id.");
        return;
      }
      items[idx] = { id, title, date, image, excerpt, tags, content };
    }

    const put = await fetch("/api/admin/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ items }),
    });
    const j = await put.json().catch(() => ({}));
    if (!put.ok) {
      setStatus(j.error || "Save failed. Are you still signed in?");
      return;
    }
    setPayload(j);
    const saved = j.items.find((n) => n.id === id);
    originalIdRef.current = id;
    setDraft(saved ? { ...saved, tags: [...(saved.tags || [])] } : null);
    setStatus("Saved.");
    if (isNew) {
      router.replace(`/admin/news/${encodeURIComponent(id)}/`);
    }
  }

  async function handleDelete() {
    if (isNew) {
      router.push("/admin/");
      return;
    }
    if (!payload || !originalIdRef.current) return;
    if (!window.confirm("Delete this article permanently?")) return;
    const orig = originalIdRef.current;
    const items = payload.items.filter((n) => n.id !== orig);
    const put = await fetch("/api/admin/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ items }),
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
      const url = await pickAndUploadAdminImage("news");
      if (url) setDraft((d) => (d ? { ...d, image: url } : d));
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
            <p className="mb-3">Article not found.</p>
            <Link href="/admin/?tab=news" style={{ color: "#666" }}>
              ← Back to news
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
          <Link href="/admin/?tab=news" className="d-inline-block mb-20" style={{ color: "#666" }}>
            ← Back to news
          </Link>
          <h2 className="section__title--desc mb-25">
            {isNew ? "New article" : `Edit: ${draft.title}`}
          </h2>

          {status ? (
            <p className="mb-20" style={{ color: status === "Saved." ? "#0a0" : "#c00" }}>
              {status}
            </p>
          ) : null}

          <div className="single__widget widget__bg mb-30">
            <h2 className="widget__title position__relative h4 mb-20">Article</h2>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">URL id (slug)</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.id}
                onChange={(e) => setDraft((d) => (d ? { ...d, id: e.target.value } : d))}
                placeholder="auto from title if empty (new article)"
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Title</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.title}
                onChange={(e) => setDraft((d) => (d ? { ...d, title: e.target.value } : d))}
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Date (display)</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.date}
                onChange={(e) => setDraft((d) => (d ? { ...d, date: e.target.value } : d))}
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Image URL</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={draft.image}
                onChange={(e) => setDraft((d) => (d ? { ...d, image: e.target.value } : d))}
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
              <img src={draft.image} alt="" style={{ maxWidth: "320px", height: "auto" }} />
            </div>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Excerpt</span>
              <textarea
                className="widget__search--form__input"
                style={{ width: "100%", minHeight: "80px" }}
                value={draft.excerpt}
                onChange={(e) => setDraft((d) => (d ? { ...d, excerpt: e.target.value } : d))}
              />
            </label>
            <label className="d-block mb-15">
              <span className="d-block mb-8 fw-bold">Tags (comma-separated)</span>
              <input
                className="widget__search--form__input"
                style={{ width: "100%" }}
                value={(draft.tags || []).join(", ")}
                onChange={(e) =>
                  setDraft((d) =>
                    d
                      ? {
                          ...d,
                          tags: e.target.value
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean),
                        }
                      : d
                  )
                }
              />
            </label>
            <label className="d-block mb-25">
              <span className="d-block mb-8 fw-bold">Content (HTML)</span>
              <textarea
                className="widget__search--form__input"
                style={{ width: "100%", minHeight: "240px", fontFamily: "monospace" }}
                value={draft.content}
                onChange={(e) => setDraft((d) => (d ? { ...d, content: e.target.value } : d))}
              />
            </label>
            <div className="d-flex flex-wrap gap-3">
              <button type="button" className="primary__btn" onClick={handleSave}>
                Save article
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
