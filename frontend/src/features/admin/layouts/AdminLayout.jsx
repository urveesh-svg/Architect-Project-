import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside>ARCHBUILD Admin</aside>
      <main><Outlet /></main>
    </div>
  );
}
