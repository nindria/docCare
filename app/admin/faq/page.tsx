"use client";
import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";

export default function AdminFAQPage() {
  const [faq, setFaq] = useState([
    { id: 1, q: "Bagaimana cara booking?", a: "Pilih dokter lalu pilih jadwal." },
  ]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />
        <div className="p-8 bg-white rounded-2xl shadow-sm">
          <h1 className="text-xl font-bold mb-4">Kelola FAQ</h1>

          {faq.map((f) => (
            <div key={f.id} className="mb-4 border-b pb-2">
              <p className="font-semibold">{f.q}</p>
              <p className="text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
