"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { AdminBrandBar, AdminAppBar, AdminSimpleFooter } from "@/components/admin/AdminShellHeader";

export default function AdminRootLayout({ children }) {
  const [phase, setPhase] = useState("loading");

  const checkSession = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/session", { credentials: "include" });
      const j = await r.json();
      setPhase(j.ok ? "app" : "login");
    } catch {
      setPhase("login");
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setPhase("login");
  }

  if (phase === "loading") {
    return (
      <div className="min-vh-100 bg-white d-flex flex-column">
        <AdminBrandBar />
        <div className="container text-center py-5 flex-grow-1">
          <p className="mb-0">Loading…</p>
        </div>
        <AdminSimpleFooter />
      </div>
    );
  }

  if (phase === "login") {
    return (
      <div className="min-vh-100 bg-white d-flex flex-column">
        <AdminBrandBar />
        <div className="flex-grow-1">
          <AdminLoginForm onLoggedIn={() => setPhase("app")} />
        </div>
        <AdminSimpleFooter />
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-white d-flex flex-column">
      <Suspense
        fallback={
          <header className="border-bottom bg-white py-3" style={{ borderColor: "#e8e8e8" }}>
            <div className="container">
              <h1 className="h5 mb-0" style={{ fontWeight: 700 }}>
                Admin Panel
              </h1>
            </div>
          </header>
        }
      >
        <AdminAppBar onLogout={handleLogout} />
      </Suspense>
      <main className="flex-grow-1">{children}</main>
      <AdminSimpleFooter />
    </div>
  );
}
