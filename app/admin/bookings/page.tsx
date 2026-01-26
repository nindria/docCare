"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

type BookingStatus = "Pending" | "Confirmed" | "Cancelled" | "Done";

type Booking = {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  complaint?: string;
  status: BookingStatus;
};

const initialBookings: Booking[] = [
  {
    id: 1,
    patient: "Budi Santoso",
    doctor: "Dr. Indria",
    date: "2026-01-20",
    status: "Pending",
  },
  {
    id: 2,
    patient: "Siti Rahma",
    doctor: "Dr. Ahmad Wijaya",
    date: "2026-01-21",
    complaint: "Dokter terlambat hadir",
    status: "Done",
  },
  {
    id: 3,
    patient: "Rina Putri",
    doctor: "Dr. Indria",
    date: "2026-01-22",
    status: "Confirmed",
  },
];

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filterDoctor, setFilterDoctor] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const doctors = [...new Set(bookings.map((b) => b.doctor))];

  const filteredBookings = bookings.filter((b) => {
    return (
      (filterDoctor ? b.doctor === filterDoctor : true) &&
      (filterDate ? b.date === filterDate : true)
    );
  });

  // 🔄 UBAH STATUS
  const handleChangeStatus = (booking: Booking) => {
    Swal.fire({
      title: "Ubah Status Booking",
      input: "select",
      inputOptions: {
        Pending: "Pending",
        Confirmed: "Confirmed",
        Cancelled: "Cancelled",
        Done: "Done",
      },
      inputValue: booking.status,
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        setBookings((prev) =>
          prev.map((b) =>
            b.id === booking.id ? { ...b, status: result.value as BookingStatus } : b
          )
        );
        Swal.fire("Berhasil!", "Status booking diperbarui", "success");
      }
    });
  };

  // ⚠️ TANGANI KOMPLAIN
  const handleComplaint = (booking: Booking) => {
    if (!booking.complaint) {
      Swal.fire("Tidak ada komplain", "", "info");
      return;
    }

    Swal.fire({
      title: `Komplain dari ${booking.patient}`,
      html: `<p class="text-left">${booking.complaint}</p>`,
      confirmButtonText: "Tandai Selesai",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Selesai", "Komplain telah ditangani", "success");
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
            <h1 className="text-xl font-bold text-slate-800">
              Management Booking
            </h1>
            <p className="text-sm text-slate-500 mb-6">
              Kelola semua jadwal konsultasi pasien
            </p>

            {/* FILTER */}
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="rounded-lg border px-3 py-2 text-sm"
              />

              <select
                value={filterDoctor}
                onChange={(e) => setFilterDoctor(e.target.value)}
                className="rounded-lg border px-3 py-2 text-sm"
              >
                <option value="">Semua Dokter</option>
                {doctors.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setFilterDoctor("");
                  setFilterDate("");
                }}
                className="rounded-lg bg-slate-200 px-4 py-2 text-sm hover:bg-slate-300"
              >
                Reset Filter
              </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 text-left">Pasien</th>
                    <th className="px-4 py-3 text-left">Dokter</th>
                    <th className="px-4 py-3 text-left">Tanggal</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>

                <tbody className="divide-y bg-white">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium">{b.patient}</td>
                      <td className="px-4 py-3">{b.doctor}</td>
                      <td className="px-4 py-3">{b.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold
                          ${
                            b.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : b.status === "Confirmed"
                              ? "bg-blue-100 text-blue-600"
                              : b.status === "Done"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right space-x-3">
                        <button
                          onClick={() => handleChangeStatus(b)}
                          className="text-xs font-semibold text-indigo-600 hover:underline"
                        >
                          Ubah Status
                        </button>

                        {b.complaint && (
                          <button
                            onClick={() => handleComplaint(b)}
                            className="text-xs font-semibold text-red-600 hover:underline"
                          >
                            Lihat Komplain
                          </button>
                        )}
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
