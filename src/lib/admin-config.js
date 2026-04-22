import config from "../../config/admin.json";

/**
 * Admin credentials: edit `config/admin.json` (see `config/admin.example.json`).
 * Imported at build time so values are bundled with the app.
 */
export function getAdminConfig() {
  return {
    passcode: String(config.passcode ?? "").trim(),
    sessionSecret: String(config.sessionSecret ?? "").trim(),
  };
}
