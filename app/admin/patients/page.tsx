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
  active: boolean;
  bookings: Booking[];
};

const initialPatients: Patient[] = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@email.com",
    phone: "08123456789",
    active: true,
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
    active: true,
    bookings: [
      { id: 3, doctor: "Dr. Indria", date: "18 Jan 2026", status: "Dibatalkan" },
    ],
  },
];

export default function AdminPatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  // 🚫 NONAKTIFKAN
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

  // 🔑 RESET PASSWORD
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

  // 📅 RIWAYAT BOOKING
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
            
            {/* HEADER */}
            <div className="mb-6">
              <h1 className="text-xl font-bold text-slate-800">
                Management Pasien
              </h1>
              <p className="text-sm text-slate-500">
                Kelola akun pasien dan riwayat booking
              </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 text-left">Nama</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Telepon</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>

                <tbody className="divide-y bg-white">
                  {patients.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">
                        {p.name}
                      </td>
                      <td className="px-4 py-3">{p.email}</td>
                      <td className="px-4 py-3">{p.phone}</td>
                      <td className="px-4 py-3">
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
                      <td className="px-4 py-3 text-right space-x-3">
                        <button
                          onClick={() => handleViewBookings(p)}
                          className="text-xs font-semibold text-blue-600 hover:underline"
                        >
                          Riwayat Booking
                        </button>

                        {p.active && (
                          <button
                            onClick={() => handleDeactivate(p.id)}
                            className="text-xs font-semibold text-red-600 hover:underline"
                          >
                            Nonaktifkan
                          </button>
                        )}

                        <button
                          onClick={() => handleResetPassword(p)}
                          className="text-xs font-semibold text-purple-600 hover:underline"
                        >
                          Reset Password
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
    </div>
  );
}
