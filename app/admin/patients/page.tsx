"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

type Booking = {
  id: number;
  doctor: string;
  date: string;
  status: string;
};

type Patient = {
  id: number;
  name: string;
  email: string;
  phone: string;
  birth: string;
  gender: "Laki-laki" | "Perempuan";
  active: boolean;
  avatar: string;
  bookings: Booking[];
};

const initialPatients: Patient[] = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@email.com",
    phone: "08123456789",
    birth: "1998-04-12",
    gender: "Laki-laki",
    active: true,
    avatar: "https://i.pravatar.cc/150?img=12",
    bookings: [
      { id: 1, doctor: "Dr. Indria", date: "12 Jan 2026", status: "Selesai" },
      { id: 2, doctor: "Dr. Ahmad", date: "20 Jan 2026", status: "Menunggu" },
    ],
  },
  {
    id: 2,
    name: "Siti Rahma",
    email: "siti@email.com",
    phone: "08987654321",
    birth: "2001-09-22",
    gender: "Perempuan",
    active: true,
    avatar: "https://i.pravatar.cc/150?img=32",
    bookings: [
      { id: 3, doctor: "Dr. Indria", date: "18 Jan 2026", status: "Dibatalkan" },
    ],
  },
];

export default function AdminPatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  const handleDeactivate = (id: number) => {
    Swal.fire({
      title: "Nonaktifkan akun pasien?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Ya, Nonaktifkan",
    }).then((result) => {
      if (result.isConfirmed) {
        setPatients((prev) =>
          prev.map((p) => (p.id === id ? { ...p, active: false } : p))
        );
        Swal.fire("Berhasil!", "Akun pasien dinonaktifkan", "success");
      }
    });
  };

  const handleResetPassword = (patient: Patient) => {
    Swal.fire({
      title: `Reset password ${patient.name}?`,
      text: "Password akan direset ke default",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Reset",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Berhasil!", "Password berhasil direset", "success");
      }
    });
  };

  const handleViewBookings = (patient: Patient) => {
    const bookingList = patient.bookings
      .map(
        (b) =>
          `• ${b.date} dengan ${b.doctor} <br/> Status: <b>${b.status}</b>`
      )
      .join("<br/><br/>");

    Swal.fire({
      title: `Riwayat Booking - ${patient.name}`,
      html: bookingList || "Belum ada booking",
      width: 600,
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />

        <div className="p-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h1 className="mb-1 text-2xl font-bold text-slate-800">
              Manajemen Pasien
            </h1>
            <p className="mb-6 text-sm text-slate-500">
              Kelola data lengkap pasien yang terdaftar
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left">Pasien</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">No. WhatsApp</th>
                    <th className="px-4 py-3 text-left">Tanggal Lahir</th>
                    <th className="px-4 py-3 text-left">Gender</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {patients.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      {/* PASIEN */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.avatar}
                            alt={p.name}
                            className="h-11 w-11 rounded-full object-cover border"
                          />
                          <div>
                            <p className="font-semibold text-slate-800">
                              {p.name}
                            </p>
                            <p className="text-xs text-slate-400">ID: {p.id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-slate-600">{p.email}</td>
                      <td className="px-4 py-4 text-slate-600">{p.phone}</td>
                      <td className="px-4 py-4 text-slate-600">
                        {new Date(p.birth).toLocaleDateString("id-ID")}
                      </td>
                      <td className="px-4 py-4 text-slate-600">{p.gender}</td>

                      {/* STATUS */}
                      <td className="px-4 py-4">
                        {p.active ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                            Aktif
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                            Nonaktif
                          </span>
                        )}
                      </td>

                      {/* AKSI */}
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleViewBookings(p)}
                            className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100"
                          >
                            Booking
                          </button>

                          {p.active && (
                            <button
                              onClick={() => handleDeactivate(p.id)}
                              className="rounded-lg bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-100"
                            >
                              Nonaktifkan
                            </button>
                          )}

                          <button
                            onClick={() => handleResetPassword(p)}
                            className="rounded-lg bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 hover:bg-purple-100"
                          >
                            Reset
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
