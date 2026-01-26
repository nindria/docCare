"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

export default function AdminNotificationPage() {
  const [message, setMessage] = useState("");

  const sendBroadcast = () => {
    Swal.fire("Terkirim!", "Notifikasi berhasil dikirim ke semua user", "success");
    setMessage("");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />
        <div className="p-8 bg-white rounded-2xl shadow-sm">
          <h1 className="text-xl font-bold mb-4">Notifikasi Broadcast</h1>

          <textarea
            placeholder="Tulis pesan notifikasi..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-3 text-sm mb-4"
            rows={4}
          />

          <button
            onClick={sendBroadcast}
            className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700"
          >
            Kirim ke Semua User
          </button>
        </div>
      </main>
    </div>
  );
}
