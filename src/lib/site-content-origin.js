/** Set on every Netlify build and runtime. Not set in local `next dev`. */
export function isNetlifyDeploy() {
  return Boolean(process.env.DEPLOY_ID);
}

/**
 * In Netlify, `/api/*` is rewritten to `netlify/functions/*` and Blobs are wired
 * there. Next.js route handlers in this repo are still used for local dev;
 * on Netlify, delegate reads to the same public paths so RSC/SSR get blob-backed data.
 */
export async function tryFetchFirstPartyApiPath(apiPath) {
  if (!isNetlifyDeploy()) return null;
  const p = apiPath.startsWith("/") ? apiPath : `/${apiPath}`;
  for (const origin of getServerOrigins()) {
    try {
      const r = await fetch(`${origin}${p}`, { cache: "no-store" });
      if (!r.ok) continue;
      return await r.json();
    } catch {
      /* try next origin */
    }
  }
  return null;
}

/**
 * Server-side base URL for fetching static JSON that lives under `public/`
 * (e.g. `/data/products.json`). Matches the "fetch the deployed file" pattern from
 * static+Netlify so serverless can load defaults even when the file is not on
 * the function filesystem.
 */
export function getServerOrigins() {
  const fromEnv = [
    process.env.URL,
    process.env.DEPLOY_PRIME_URL,
    process.env.DEPLOY_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
  ].filter(Boolean);
  if (fromEnv.length) {
    return [...new Set(fromEnv.map((u) => u.replace(/\/$/, "")))];
  }
  // `next dev` / `next start` (default port; override with NEXT_PUBLIC_SITE_URL if needed)
  return ["http://127.0.0.1:3000"];
}

/**
 * GET JSON from a path under the deployed site, e.g. "/data/products.json".
 * Tries each origin until one succeeds (production URL, then preview, etc.).
 */
export async function fetchPublicJsonByPath(relativePath) {
  const path0 = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  for (const origin of getServerOrigins()) {
    try {
      const r = await fetch(`${origin}${path0}`, { cache: "no-store" });
      if (!r.ok) continue;
      return await r.json();
    } catch {
      /* try next origin */
    }
  }
  return null;
}
