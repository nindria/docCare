"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

export default function AdminSettingsPage() {
  const [adminFee, setAdminFee] = useState(5000);
  const [openHour, setOpenHour] = useState("08:00");
  const [closeHour, setCloseHour] = useState("21:00");

  const roles = ["Admin", "Dokter", "Pasien"];
  const [newRole, setNewRole] = useState("");

  const handleSaveSettings = () => {
    Swal.fire("Berhasil!", "Pengaturan sistem diperbarui", "success");
  };

  const handleAddRole = () => {
    if (!newRole) return;
    roles.push(newRole);
    setNewRole("");
    Swal.fire("Berhasil", "Role baru ditambahkan", "success");
  };

  const handleBackup = () => {
    Swal.fire({
      title: "Backup Database?",
      text: "Sistem akan membuat file cadangan database terbaru",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Backup",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire("Berhasil", "Backup database selesai dibuat", "success");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />

        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold text-slate-800">System Settings</h1>

          {/* ADMIN FEE */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-slate-700">
              💰 Atur Biaya Admin Fee
            </h2>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={adminFee}
                onChange={(e) => setAdminFee(Number(e.target.value))}
                className="w-40 rounded-lg border px-3 py-2 text-sm"
              />
              <span className="text-sm text-slate-500">per transaksi</span>
            </div>
          </div>

          {/* JAM OPERASIONAL */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-slate-700">
              🕒 Jam Operasional Sistem
            </h2>
            <div className="flex gap-4 items-center">
              <div>
                <label className="text-sm text-slate-500">Buka</label>
                <input
                  type="time"
                  value={openHour}
                  onChange={(e) => setOpenHour(e.target.value)}
                  className="block rounded-lg border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-slate-500">Tutup</label>
                <input
                  type="time"
                  value={closeHour}
                  onChange={(e) => setCloseHour(e.target.value)}
                  className="block rounded-lg border px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* ROLE MANAGEMENT */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-slate-700">
              👥 Kelola Role Admin
            </h2>

            <div className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Nama role baru..."
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="flex-1 rounded-lg border px-3 py-2 text-sm"
              />
              <button
                onClick={handleAddRole}
                className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
              >
                Tambah Role
              </button>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              {roles.map((role, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2"
                >
                  {role}
                  <button className="text-xs text-red-500 hover:underline">
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* BACKUP DATABASE */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-slate-700">
              🗄️ Backup Database
            </h2>
            <p className="mb-4 text-sm text-slate-500">
              Buat salinan database untuk mencegah kehilangan data.
            </p>
            <button
              onClick={handleBackup}
              className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Backup Sekarang
            </button>
          </div>

          {/* SAVE BUTTON */}
          <div className="text-right">
            <button
              onClick={handleSaveSettings}
              className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Simpan Semua Pengaturan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
