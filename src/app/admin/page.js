import { Suspense } from "react";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-5 text-center">
          <p className="mb-0">Loading…</p>
        </div>
      }
    >
      <AdminDashboard />
    </Suspense>
  );
}
