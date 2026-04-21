"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const tabBase = {
  padding: "0.65rem 1rem",
  textDecoration: "none",
  color: "#666",
  borderBottom: "2px solid transparent",
  marginBottom: "-1px",
};

const tabActive = {
  ...tabBase,
  color: "#111",
  fontWeight: 600,
  borderBottomColor: "var(--primary-color, #c70909)",
};

/** Title-only bar (login / loading). */
export function AdminBrandBar() {
  return (
    <header
      className="border-bottom bg-white"
      style={{ borderColor: "#e8e8e8", position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container py-3">
        <h1 className="h5 mb-0" style={{ fontWeight: 700 }}>
          Admin Panel
        </h1>
      </div>
    </header>
  );
}

/** Logged-in header with tabs (requires Suspense boundary in parent). */
export function AdminAppBar({ onLogout }) {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const onAdminHome = pathname === "/admin" || pathname === "/admin/";
  const activeNews =
    pathname.startsWith("/admin/news") || (onAdminHome && tab === "news");
  const activeProducts =
    pathname.startsWith("/admin/product") || (onAdminHome && tab !== "news");

  return (
    <header
      className="border-bottom bg-white"
      style={{ borderColor: "#e8e8e8", position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <h1 className="h5 mb-0" style={{ fontWeight: 700 }}>
            Admin Panel
          </h1>

          <nav
            className="d-flex align-items-center border-bottom flex-grow-1 flex-md-grow-0 justify-content-center justify-content-md-start"
            style={{ borderColor: "#e8e8e8" }}
          >
            <Link
              href="/admin/?tab=products"
              style={activeProducts ? tabActive : tabBase}
              scroll={false}
            >
              Products
            </Link>
            <Link
              href="/admin/?tab=news"
              style={activeNews ? tabActive : tabBase}
              scroll={false}
            >
              News
            </Link>
          </nav>

          <div className="d-flex align-items-center gap-3">
            <Link href="/" style={{ color: "#666", fontSize: "0.9rem", textDecoration: "none" }}>
              View site
            </Link>
            <button
              type="button"
              className="primary__btn"
              style={{ padding: "0.4rem 1rem", fontSize: "0.9rem" }}
              onClick={onLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/** Minimal footer so the admin area has a clear end. */
export function AdminSimpleFooter() {
  return (
    <footer
      className="border-top py-4 mt-auto"
      style={{ borderColor: "#e8e8e8", background: "#fafafa" }}
    >
      <div className="container text-center">
        <p className="mb-0 small" style={{ color: "#999" }}>
          End of page
        </p>
      </div>
    </footer>
  );
}
