/**
 * For fetching `/data/*.json` from the deployed site (static from public/).
 * Match procision-demo: URL / DEPLOY_PRIME_URL, else request host.
 */
export function siteOrigin(req) {
  const primary = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (primary) {
    try {
      return new URL(primary).origin;
    } catch {
      /* fall through */
    }
  }
  return new URL(req.url).origin;
}
