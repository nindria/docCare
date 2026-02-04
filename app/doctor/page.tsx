"use client";

import { useEffect, useState } from "react";
import DoctorSidebar from "../../components2/sidebarDoctor";
import DoctorTopbar from "../../components2/DoctorTopbar";
import StatCard from "../../components2/StatCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

/* ================== DATA DUMMY ================== */

const patientStats = [
  { day: "Sen", patients: 8 },
  { day: "Sel", patients: 12 },
  { day: "Rab", patients: 6 },
  { day: "Kam", patients: 14 },
  { day: "Jum", patients: 10 },
  { day: "Sab", patients: 5 },
  { day: "Min", patients: 3 },
];

const appointmentStatus = [
  { name: "Menunggu", value: 5 },
  { name: "Dikonfirmasi", value: 18 },
  { name: "Selesai", value: 32 },
  { name: "Dibatalkan", value: 2 },
];

const STATUS_COLORS = ["#facc15", "#38bdf8", "#22c55e", "#ef4444"];

const monthlyEarnings = [
  { month: "Jan", income: 3200000 },
  { month: "Feb", income: 4100000 },
  { month: "Mar", income: 3800000 },
  { month: "Apr", income: 5200000 },
  { month: "Mei", income: 4600000 },
  { month: "Jun", income: 6100000 },
];

export default function DoctorDashboard() {
  const [doctorName, setDoctorName] = useState("Dr. Indria");

  useEffect(() => {
    const saved = localStorage.getItem("doctorProfile");
    if (saved) {
      const data = JSON.parse(saved);
      setDoctorName(data.name);
    }
  }, []);

  const formatRupiah = (number: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);

  const formatNumber = (number: number) =>
    new Intl.NumberFormat("id-ID").format(number);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <DoctorSidebar />

      <main className="flex-1 ml-64 p-8">
        <DoctorTopbar />

        {/* SAPAAN */}
        <div className="mt-6 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white shadow-lg">
          <h1 className="text-xl font-semibold">Selamat Datang,</h1>
          <h2 className="text-2xl font-bold">{doctorName}</h2>
          <p className="mt-1 text-sm text-white/90">
            Semoga hari ini berjalan lancar dan penuh kesehatan ✨
          </p>
        </div>

        {/* KARTU STATISTIK */}
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <StatCard title="Total Pasien" value={formatNumber(1248)} color="text-teal-600" />
          <StatCard title="Janji Hari Ini" value={formatNumber(32)} color="text-cyan-600" />
          <StatCard title="Tindakan Medis" value={formatNumber(12)} color="text-indigo-600" />
          <StatCard title="Pendapatan Hari Ini" value={formatRupiah(2340000)} color="text-emerald-600" />
        </div>

        {/* ================== BARIS 1 ================== */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* GRAFIK PASIEN */}
          <div className="col-span-2 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              📈 Jumlah Pasien Minggu Ini
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={patientStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" />
                  <YAxis allowDecimals={false} />
               <Tooltip
                  formatter={(value: number | undefined) => [
                    `${value ?? 0} pasien`,
                    "Jumlah Pasien",
                  ]}
                />

                  <Line
                    type="monotone"
                    dataKey="patients"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* STATUS JANJI TEMU */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              🗂 Status Janji Temu
            </h3>
            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={appointmentStatus}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {appointmentStatus.map((_, i) => (
                      <Cell key={i} fill={STATUS_COLORS[i]} />
                    ))}
                  </Pie>
                <Tooltip
                  formatter={(value: number | undefined) => [
                    `${value ?? 0} janji`,
                    "Jumlah",
                  ]}
                />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ================== BARIS 2 ================== */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-700">
            💰 Pendapatan Bulanan
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyEarnings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(v) => `Rp${v / 1000000}jt`} />
              <Tooltip
                formatter={(value: number | undefined) =>
                  formatRupiah(value ?? 0)
                }
              />
                <Bar
                  dataKey="income"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
