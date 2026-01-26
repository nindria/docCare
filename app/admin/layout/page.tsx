import AdminSidebar from "../../../components2/sidebarAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 w-full min-h-screen bg-slate-50 p-8">
        {children}
      </main>
    </div>
  );
}
