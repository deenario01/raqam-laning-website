export function jsonResponse(data, init = {}) {
  const status = init.status ?? 200;
  const headers = { "Content-Type": "application/json", ...init.headers };
  return new Response(JSON.stringify(data), { status, headers });
}
