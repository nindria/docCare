"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  email: string;
  verified: boolean;
  rating: number;
  reviews: number;
};

const initialDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Indria",
    specialty: "Dokter Umum",
    email: "indria@email.com",
    verified: true,
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 2,
    name: "Dr. Ahmad Wijaya",
    specialty: "Spesialis Jantung",
    email: "ahmad@email.com",
    verified: false,
    rating: 4.5,
    reviews: 80,
  },
];

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [selected, setSelected] = useState<Doctor | null>(null);
  const [form, setForm] = useState({ name: "", specialty: "", email: "" });

  const closeModal = () => {
    setSelected(null);
    setForm({ name: "", specialty: "", email: "" });
  };

  const handleSaveDoctor = () => {
    if (!form.name || !form.specialty || !form.email) {
      return Swal.fire("Oops!", "Semua field wajib diisi", "warning");
    }

    if (selected) {
      setDoctors((prev) =>
        prev.map((d) => (d.id === selected.id ? { ...d, ...form } : d))
      );
      Swal.fire("Berhasil!", "Data dokter diperbarui", "success");
    } else {
      const newDoctor: Doctor = {
        id: Date.now(),
        ...form,
        verified: false,
        rating: 0,
        reviews: 0,
      };
      setDoctors((prev) => [...prev, newDoctor]);
      Swal.fire("Berhasil!", "Dokter baru ditambahkan", "success");
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Hapus dokter?",
      text: "Data tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Ya, Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        setDoctors((prev) => prev.filter((d) => d.id !== id));
        Swal.fire("Terhapus!", "Dokter berhasil dihapus", "success");
      }
    });
  };

  const handleVerify = (id: number) => {
    setDoctors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, verified: true } : d))
    );
    Swal.fire("Terverifikasi!", "Dokter telah diverifikasi", "success");
  };

  const handleSchedule = (doctor: Doctor) => {
    Swal.fire({
      title: `Atur Jadwal - ${doctor.name}`,
      input: "text",
      inputLabel: "Contoh: Senin - Jumat (09:00 - 15:00)",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire("Tersimpan!", "Jadwal praktik diperbarui", "success");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 ml-64">
        <AdminTopbar />

        <div className="p-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            
            {/* HEADER */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  Management Dokter
                </h1>
                <p className="text-sm text-slate-500">
                  Kelola data dokter, verifikasi, dan jadwal praktik
                </p>
              </div>

              <button
                onClick={() => {
                  setSelected(null);
                  setForm({ name: "", specialty: "", email: "" });
                }}
                className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                + Tambah Dokter
              </button>
            </div>

            {/* TABLE */}
            <div className="mt-6 overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 text-left">Nama</th>
                    <th className="px-4 py-3 text-left">Spesialis</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Rating</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>

                <tbody className="divide-y bg-white">
                  {doctors.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">
                        {d.name}
                      </td>
                      <td className="px-4 py-3">{d.specialty}</td>
                      <td className="px-4 py-3">{d.email}</td>
                      <td className="px-4 py-3">
                        ⭐ {d.rating} ({d.reviews})
                      </td>
                      <td className="px-4 py-3">
                        {d.verified ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                            Terverifikasi
                          </span>
                        ) : (
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-600">
                            Menunggu
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right space-x-3">
                        {!d.verified && (
                          <button
                            onClick={() => handleVerify(d.id)}
                            className="text-xs font-semibold text-green-600 hover:underline"
                          >
                            Verifikasi
                          </button>
                        )}
                        <button
                          onClick={() => {
                            setSelected(d);
                            setForm({
                              name: d.name,
                              specialty: d.specialty,
                              email: d.email,
                            });
                          }}
                          className="text-xs font-semibold text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleSchedule(d)}
                          className="text-xs font-semibold text-purple-600 hover:underline"
                        >
                          Jadwal
                        </button>
                        <button
                          onClick={() => handleDelete(d.id)}
                          className="text-xs font-semibold text-red-600 hover:underline"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL */}
      {(selected !== null || form.name) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-700">
              {selected ? "Edit Dokter" : "Tambah Dokter"}
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nama Dokter"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder="Spesialis"
                value={form.specialty}
                onChange={(e) =>
                  setForm({ ...form, specialty: e.target.value })
                }
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                onClick={handleSaveDoctor}
                className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
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
