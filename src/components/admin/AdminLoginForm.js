"use client";

import { useState } from "react";

export default function AdminLoginForm({ onLoggedIn }) {
  const [passInput, setPassInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    const passcode = passInput.replace(/\D/g, "").slice(0, 6);
    if (passcode.length !== 6) {
      setLoginError("Enter the 6-digit passcode.");
      return;
    }
    setBusy(true);
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ passcode }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) {
        setLoginError(j.error || "Login failed");
        return;
      }
      setPassInput("");
      onLoggedIn();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section--padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3 mb-25">Sign in</h2>
              <p className="mb-25" style={{ color: "#666", lineHeight: 1.6 }}>
                Enter the 6-digit passcode from your server environment (<code>ADMIN_PASSCODE</code>).
              </p>
              <form onSubmit={handleLogin}>
                <label className="d-block mb-15">
                  <span className="d-block mb-8" style={{ fontWeight: 600 }}>
                    Passcode
                  </span>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={6}
                    autoComplete="one-time-code"
                    className="widget__search--form__input"
                    style={{ width: "100%" }}
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  />
                </label>
                {loginError ? (
                  <p className="mb-15" style={{ color: "#c00", fontSize: "0.95rem" }}>
                    {loginError}
                  </p>
                ) : null}
                <button type="submit" className="primary__btn w-100" disabled={busy}>
                  {busy ? "Signing in…" : "Sign in"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
