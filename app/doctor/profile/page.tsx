"use client";

import { useState, useEffect } from "react";
import DoctorSidebar from "../../../components2/sidebarDoctor";
import Swal from "sweetalert2";

export default function DoctorProfilePage() {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    bio: "",
  });

  // 🔥 Ambil data dari localStorage saat halaman dibuka
  useEffect(() => {
    const saved = localStorage.getItem("doctorProfile");
    if (saved) {
      setForm(JSON.parse(saved));
    } else {
      setForm({
        name: "Dr. Indria",
        specialty: "Dokter Umum",
        email: "dr.indria@email.com",
        phone: "081234567890",
        experience: "7 Tahun",
        location: "Jakarta",
        bio: "Dokter berpengalaman dalam konsultasi kesehatan umum dan telemedicine.",
      });
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("doctorProfile", JSON.stringify(form));

    Swal.fire({
      title: "Berhasil Disimpan!",
      text: "Profil dokter berhasil diperbarui.",
      icon: "success",
      confirmButtonColor: "#06b6d4",
      confirmButtonText: "Oke",
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <DoctorSidebar />

<main className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold text-slate-800">Profil Dokter</h1>
        <p className="mt-1 text-sm text-slate-500">
          Kelola informasi profil profesional Anda
        </p>

        <div className="mt-6 max-w-3xl space-y-5 rounded-xl bg-white p-6 shadow-sm">
          {[
            { label: "Nama Lengkap", key: "name" },
            { label: "Spesialis", key: "specialty" },
            { label: "Email", key: "email" },
            { label: "Nomor WhatsApp", key: "phone" },
            { label: "Pengalaman Praktik", key: "experience" },
            { label: "Lokasi Praktik", key: "location" },
          ].map((item) => (
            <div key={item.key}>
              <label className="text-sm font-medium text-slate-600">
                {item.label}
              </label>
              <input
                type="text"
                value={(form as any)[item.key]}
                onChange={(e) =>
                  setForm({ ...form, [item.key]: e.target.value })
                }
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="text-sm font-medium text-slate-600">
              Tentang Dokter
            </label>
            <textarea
              rows={4}
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

         <button
          onClick={handleSave}
          className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-teal-600 hover:to-cyan-700 hover:shadow-lg hover:-translate-y-0.5"
        >
          Simpan Perubahan
        </button>

        </div>
      </main>
    </div>
  );
}
