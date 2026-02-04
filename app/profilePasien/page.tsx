"use client";

import { useState } from "react";
import Navbar from "../../components2/navbar";
import Footer from "../../components2/footer";

export default function PatientProfile() {
  const [form, setForm] = useState({
    name: "Sandrina Anilia",
    email: "sandrina@email.com",
    phone: "08123456789",
    birth: "2002-05-10",
    gender: "Perempuan",
  });

  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setPhoto(imageUrl);
    }
  };

  const handleSave = () => {
    alert("Profil berhasil diperbarui ✅");
  };

  return (
    <>
      <Navbar />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-10 text-3xl font-bold text-slate-800">
            Profil Pasien
          </h1>

          <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-3">
            
            {/* ================= FOTO PROFIL ================= */}
            <div className="flex flex-col items-center text-center border-r md:pr-8">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-teal-500 shadow-md">
                <img
                  src={
                    photo ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="Foto Profil"
                  className="h-full w-full object-cover"
                />
              </div>

              <label className="mt-4 cursor-pointer rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600">
                Ganti Foto
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>

              <p className="mt-3 text-xs text-slate-500">
                Format JPG / PNG, maks 2MB
              </p>
            </div>

            {/* ================= FORM ================= */}
            <div className="md:col-span-2 space-y-5">
              
              {/* Nama */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              {/* Birth */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={form.birth}
                  onChange={(e) => setForm({ ...form, birth: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Jenis Kelamin
                </label>
                <div className="mt-2 flex gap-4">
                  {["Laki-laki", "Perempuan"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setForm({ ...form, gender: g })}
                      className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition ${
                        form.gender === g
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-slate-300 hover:border-teal-400"
                      }`}
                    >
                      {g === "Laki-laki" ? "👨 Laki-laki" : "👩 Perempuan"}
                    </button>
                  ))}
                </div>
              </div>

              {/* SAVE BUTTON */}
              <button
                onClick={handleSave}
                className="mt-4 w-full rounded-lg bg-teal-500 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-600"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
