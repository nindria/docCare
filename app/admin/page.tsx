"use client";

import AdminSidebar from "../../components2/sidebarAdmin";
import AdminTopbar from "../../components2/adminTopbar";
import StatCard from "../../components2/statCardAdmin";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <AdminSidebar />

<main className="flex-1 ml-64 p-8">
        <AdminTopbar />

        {/* 🔥 WELCOME */}
        <div className="mt-6 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white shadow-lg">
          <h1 className="text-xl font-semibold">Welcome Back, Admin 👋</h1>
          <p className="mt-1 text-sm text-white/90">
            Here's what’s happening in your healthcare system today
          </p>
        </div>

        {/* 📊 STAT CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Total Dokter" value="24" color="text-teal-600" />
          <StatCard title="Total Pasien" value="1,248" color="text-cyan-600" />
          <StatCard title="Booking Hari Ini" value="32" color="text-indigo-600" />
          <StatCard title="Total Transaksi" value="Rp 18.500.000" color="text-emerald-600" />
        </div>

        {/* 📈 CHARTS */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Grafik Kunjungan Pasien */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              📈 Grafik Kunjungan Pasien
            </h3>
            <div className="flex h-64 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              Chart Kunjungan Pasien
            </div>
          </div>

          {/* Grafik Pertumbuhan User */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              📉 Grafik Pertumbuhan User
            </h3>
            <div className="flex h-64 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              Chart Pertumbuhan User
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
