"use client";

import { useState } from "react"
import DoctorSidebar from "../../../components2/sidebarDoctor"
import Swal from "sweetalert2"


type Schedule = {
  day: string;
  time: string;
  location: string;
};

const initialSchedules: Schedule[] = [
  { day: "Senin", time: "09:00 - 15:00", location: "Klinik Utama" },
  { day: "Selasa", time: "10:00 - 14:00", location: "Telekonsultasi" },
  { day: "Rabu", time: "09:00 - 12:00", location: "Klinik Utama" },
  { day: "Kamis", time: "13:00 - 17:00", location: "RS Sehat Sentosa" },
  { day: "Jumat", time: "09:00 - 11:00", location: "Telekonsultasi" },
];

export default function DoctorSchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);
  const [selected, setSelected] = useState<Schedule | null>(null);
  const [form, setForm] = useState({ time: "", location: "" });

  const handleEditClick = (schedule: Schedule) => {
    setSelected(schedule);
    setForm({ time: schedule.time, location: schedule.location });
  };

  const handleSave = () => {
  if (!selected) return;

  const updated = schedules.map((item) =>
    item.day === selected.day ? { ...item, ...form } : item
  );

  setSchedules(updated);
  setSelected(null);

  // ✅ POPUP SUKSES
  Swal.fire({
    title: "Berhasil!",
    text: `Jadwal ${selected.day} berhasil diperbarui.`,
    icon: "success",
    confirmButtonColor: "#06b6d4",
    confirmButtonText: "Oke",
    background: "#ffffff",
    customClass: {
      popup: "rounded-2xl",
      confirmButton: "rounded-lg px-4 py-2",
    },
  });
};


  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <DoctorSidebar />

      {/* ✅ DIGESER BIAR GA KETIMPA SIDEBAR */}
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold text-slate-800">Jadwal Praktik</h1>
        <p className="mt-1 text-sm text-slate-500">
          Atur dan lihat jadwal praktik konsultasi Anda
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {schedules.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-700">
                  {item.day}
                </h2>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Aktif
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-600">🕒 {item.time}</p>
              <p className="mt-1 text-sm text-slate-600">📍 {item.location}</p>

              <button
                onClick={() => handleEditClick(item)}
                className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Edit Jadwal
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Edit Jadwal - {selected.day}
            </h2>

            <label className="text-sm text-slate-600">Jam Praktik</label>
            <input
              type="text"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="mt-1 mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />

            <label className="text-sm text-slate-600">Lokasi</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="mt-1 mb-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelected(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
