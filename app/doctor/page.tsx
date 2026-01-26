"use client";

import { useEffect, useState } from "react";
import DoctorSidebar from "../../components2/sidebarDoctor";
import DoctorTopbar from "../../components2/DoctorTopbar";
import StatCard from "../../components2/StatCard";

export default function DoctorDashboard() {
  const [doctorName, setDoctorName] = useState("Dr. Indria");

  useEffect(() => {
    const saved = localStorage.getItem("doctorProfile");
    if (saved) {
      const data = JSON.parse(saved);
      setDoctorName(data.name);
    }
  }, []);

  const formatRupiah = (number: number): string =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);

  const formatNumber = (number: number): string =>
    new Intl.NumberFormat("id-ID").format(number);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-cyan-50 to-teal-100">
      <DoctorSidebar />

<main className="flex-1 ml-64 p-8">
        <DoctorTopbar />

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white shadow-lg">
          <h1 className="text-xl font-semibold">Good Morning,</h1>
          <h2 className="text-2xl font-bold">{doctorName}</h2>
          <p className="mt-1 text-sm text-white/90">
            Have a nice day at great work
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <StatCard title="Total Patients" value={formatNumber(1248)} color="text-teal-600" />
          <StatCard title="Today Appointments" value={formatNumber(32)} color="text-cyan-600" />
          <StatCard title="Operations" value={formatNumber(12)} color="text-indigo-600" />
          <StatCard title="Earnings" value={formatRupiah(2340000)} color="text-emerald-600" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">Patient Statistics</h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
              Chart Area
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-700">Monthly Reports</h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
              Chart Area
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
