"use client";

import { useState } from "react";
import DoctorSidebar from "../../../components2/sidebarDoctor";
import Swal from "sweetalert2";

type Booking = {
  id: number;
  patient: string;
  date: string;
  time: string;
  complaint: string;
  status: "Menunggu" | "Dikonfirmasi" | "Selesai";
};

const initialBookings: Booking[] = [
  {
    id: 1,
    patient: "Netania Indria",
    date: "24 Jan 2026",
    time: "09:00",
    complaint: "Sakit kepala & demam",
    status: "Menunggu",
  },
  {
    id: 2,
    patient: "Budi Santoso",
    date: "24 Jan 2026",
    time: "10:30",
    complaint: "Nyeri lambung",
    status: "Dikonfirmasi",
  },
  {
    id: 3,
    patient: "Citra Lestari",
    date: "24 Jan 2026",
    time: "13:00",
    complaint: "Kontrol rutin",
    status: "Selesai",
  },
];

export default function DoctorBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  const updateStatus = (id: number, newStatus: Booking["status"]) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const showDetail = (booking: Booking) => {
    const isWaiting = booking.status === "Menunggu";
    const isConfirmed = booking.status === "Dikonfirmasi";
    const isDone = booking.status === "Selesai";

    Swal.fire({
      title: "Detail Booking Pasien",
      html: `
        <div style="text-align:left;font-size:14px;line-height:1.8">
          <p><b>Nama Pasien:</b> ${booking.patient}</p>
          <p><b>Tanggal:</b> ${booking.date}</p>
          <p><b>Jam:</b> ${booking.time}</p>
          <p><b>Keluhan:</b> ${booking.complaint}</p>
          <p><b>Status Saat Ini:</b> ${booking.status}</p>
        </div>
      `,
      showConfirmButton: isWaiting,
      showDenyButton: isWaiting || isConfirmed,
      showCancelButton: true,
      confirmButtonText: "Konfirmasi",
      denyButtonText: "Selesai",
      cancelButtonText: "Tutup",
      confirmButtonColor: "#3b82f6",
      denyButtonColor: "#16a34a",

      footer: `
        ${
          isConfirmed
            ? '<button id="undoConfirm" class="swal2-styled" style="background:#f59e0b">Batalkan Konfirmasi</button>'
            : ""
        }
        ${
          isDone
            ? '<button id="undoDone" class="swal2-styled" style="background:#6366f1">Aktifkan Lagi</button>'
            : ""
        }
      `,
      didOpen: () => {
        const undoConfirmBtn = document.getElementById("undoConfirm");
        const undoDoneBtn = document.getElementById("undoDone");

        if (undoConfirmBtn) {
          undoConfirmBtn.addEventListener("click", () => {
            updateStatus(booking.id, "Menunggu");
            Swal.fire("Dibatalkan", "Status kembali ke Menunggu", "info");
          });
        }

        if (undoDoneBtn) {
          undoDoneBtn.addEventListener("click", () => {
            updateStatus(booking.id, "Dikonfirmasi");
            Swal.fire("Diaktifkan", "Status kembali ke Dikonfirmasi", "info");
          });
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Yakin konfirmasi booking ini?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Ya, Konfirmasi",
        }).then((res) => {
          if (res.isConfirmed) {
            updateStatus(booking.id, "Dikonfirmasi");
            Swal.fire("Berhasil!", "Status diubah jadi Dikonfirmasi", "success");
          }
        });
      }

      if (result.isDenied) {
        Swal.fire({
          title: "Yakin selesaikan booking ini?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Ya, Selesaikan",
        }).then((res) => {
          if (res.isConfirmed) {
            updateStatus(booking.id, "Selesai");
            Swal.fire("Berhasil!", "Booking telah diselesaikan", "success");
          }
        });
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DoctorSidebar />

<main className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold text-slate-800">Booking Pasien</h1>
        <p className="mt-1 text-sm text-slate-500">
          Daftar pasien yang melakukan reservasi konsultasi
        </p>

        <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Pasien</th>
                <th className="px-6 py-3 font-medium">Tanggal</th>
                <th className="px-6 py-3 font-medium">Jam</th>
                <th className="px-6 py-3 font-medium">Keluhan</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {b.patient}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{b.date}</td>
                  <td className="px-6 py-4 text-slate-600">{b.time}</td>
                  <td className="px-6 py-4 text-slate-600">{b.complaint}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        b.status === "Menunggu"
                          ? "bg-yellow-100 text-yellow-700"
                          : b.status === "Dikonfirmasi"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => showDetail(b)}
                      className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
