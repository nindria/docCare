"use client";

import { useState } from "react"
import Navbar from "../../components2/navbar"
import Footer from "../../components2/footer"

export default function PatientProfile() {
  const [form, setForm] = useState({
    name: "Sandrina Anilia",
    email: "sandrina@email.com",
    phone: "08123456789",
    birth: "2002-05-10",
    gender: "Perempuan",
  });

  const handleSave = () => {
    alert("Profil berhasil diperbarui ✅")
  }

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-2xl font-bold text-[#1E5468]">
          Profil Pasien
        </h1>

        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-5">
          {/* Nama */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Nomor WhatsApp
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* Birth */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Tanggal Lahir
            </label>
            <input
              type="date"
              value={form.birth}
              onChange={(e) => setForm({ ...form, birth: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Jenis Kelamin
            </label>
            <div className="mt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, gender: "Laki-laki" })}
                className={`flex-1 rounded-lg border p-2 text-sm ${
                  form.gender === "Laki-laki"
                    ? "border-[#3B9797]"
                    : "hover:border-[#3B9797]"
                }`}
              >
                👨 Laki-laki
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, gender: "Perempuan" })}
                className={`flex-1 rounded-lg border p-2 text-sm ${
                  form.gender === "Perempuan"
                    ? "border-[#3B9797]"
                    : "hover:border-[#3B9797]"
                }`}
              >
                👩 Perempuan
              </button>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-[#3B9797] py-2 text-sm font-semibold text-white hover:bg-[#358787]"
          >
            Simpan Perubahan
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
