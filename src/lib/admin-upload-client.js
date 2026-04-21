/** Browser-only: open file picker and POST to admin upload API. */
export function pickAndUploadAdminImage(type) {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/gif";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }
      try {
        const fd = new FormData();
        fd.append("file", file);
        const r = await fetch(`/api/admin/upload?type=${type}`, {
          method: "POST",
          body: fd,
          credentials: "include",
        });
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Upload failed");
        resolve(j.url);
      } catch (e) {
        reject(e);
      }
    };
    input.click();
  });
}
