"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";

export default function AdminBannerPage() {
  const [banners, setBanners] = useState([
    { id: 1, title: "Diskon Konsultasi 50%", active: true },
  ]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />
        <div className="p-8 rounded-2xl bg-white shadow-sm">
          <h1 className="text-xl font-bold mb-4">Kelola Banner Promo</h1>

          {banners.map((b) => (
            <div key={b.id} className="flex justify-between items-center border p-3 rounded-lg mb-2">
              <span>{b.title}</span>
              <button
                onClick={() =>
                  setBanners((prev) =>
                    prev.map((x) =>
                      x.id === b.id ? { ...x, active: !x.active } : x
                    )
                  )
                }
                className={`text-xs font-semibold ${b.active ? "text-green-600" : "text-slate-400"}`}
              >
                {b.active ? "Aktif" : "Nonaktif"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
