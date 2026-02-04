"use client";

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
  AreaChart,
  Area,
} from "recharts";

import AdminSidebar from "../../components2/sidebarAdmin";
import AdminTopbar from "../../components2/adminTopbar";
import StatCard from "../../components2/statCardAdmin";

/* ================== DATA DUMMY ================== */

const patientVisitData = [
  { day: "Sen", total: 12 },
  { day: "Sel", total: 18 },
  { day: "Rab", total: 10 },
  { day: "Kam", total: 22 },
  { day: "Jum", total: 28 },
  { day: "Sab", total: 16 },
  { day: "Min", total: 8 },
];

const bookingStatusData = [
  { name: "Pending", value: 14 },
  { name: "Confirmed", value: 32 },
  { name: "Completed", value: 58 },
  { name: "Cancelled", value: 6 },
];

const COLORS = ["#facc15", "#38bdf8", "#22c55e", "#ef4444"];

const doctorBookingData = [
  { doctor: "Dr. Andi", total: 42 },
  { doctor: "Dr. Budi", total: 28 },
  { doctor: "Dr. Clara", total: 35 },
  { doctor: "Dr. Dimas", total: 20 },
];

const revenueData = [
  { month: "Jan", revenue: 4500000 },
  { month: "Feb", revenue: 6200000 },
  { month: "Mar", revenue: 7800000 },
  { month: "Apr", revenue: 5400000 },
  { month: "Mei", revenue: 8600000 },
  { month: "Jun", revenue: 9200000 },
];

// 🔹 Formatter aman untuk TS
const formatRupiah = (value?: number) =>
  value ? `Rp ${value.toLocaleString("id-ID")}` : "Rp 0";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-8">
        <AdminTopbar />

        {/* WELCOME */}
        <div className="mt-6 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white shadow-lg">
          <h1 className="text-xl font-semibold">Welcome Back, Admin 👋</h1>
          <p className="mt-1 text-sm text-white/90">
            Here's what’s happening in your healthcare system today
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Total Dokter" value="24" color="text-teal-600" />
          <StatCard title="Total Pasien" value="1,248" color="text-cyan-600" />
          <StatCard title="Booking Hari Ini" value="32" color="text-indigo-600" />
          <StatCard title="Total Transaksi" value="Rp 18.500.000" color="text-emerald-600" />
        </div>

        {/* ROW 1 — KUNJUNGAN */}
        <div className="mt-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              📈 Grafik Kunjungan Pasien (Mingguan)
            </h3>
            <div className="h-72">
              <ResponsiveContainer>
                <LineChart data={patientVisitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(v) => [`${v} pasien`, "Jumlah"]} />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Status Booking */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">🥧 Status Booking</h3>
            <div className="h-72">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={bookingStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={50}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {bookingStatusData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Booking per Dokter */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">🩺 Booking per Dokter</h3>
            <div className="h-72">
              <ResponsiveContainer>
                <BarChart data={doctorBookingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="doctor" />
                  <YAxis />
                  <Tooltip formatter={(v) => [`${v} booking`, "Total"]} />
                  <Bar dataKey="total" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ROW 3 — REVENUE */}
        <div className="mt-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">
              💰 Grafik Pendapatan Bulanan
            </h3>
            <div className="h-72">
              <ResponsiveContainer>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(v) => formatRupiah(Number(v))} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    fill="#bbf7d0"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
