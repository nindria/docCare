"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Stethoscope,
  Users,
  CalendarCheck,
  CreditCard,
  FileText,
  Image,
  HelpCircle,
  Bell,
  Settings,
} from "lucide-react";

export default function SidebarAdmin() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkClass = (active: boolean) =>
    `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
      active
        ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white p-5 shadow-lg overflow-y-auto">
      <h1 className="mb-8 text-xl font-bold text-teal-600">Admin Panel</h1>

      <nav className="space-y-6">
        {/* DASHBOARD */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold text-slate-400 uppercase">
            Overview
          </p>
          <Link href="/admin" className={linkClass(isActive("/admin"))}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>
        </div>

        {/* MANAGEMENT */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold text-slate-400 uppercase">
            Management
          </p>
          <Link
            href="/admin/doctors"
            className={linkClass(isActive("/admin/doctors"))}
          >
            <Stethoscope size={18} /> Doctors
          </Link>
          <Link
            href="/admin/patients"
            className={linkClass(isActive("/admin/patients"))}
          >
            <Users size={18} /> Patients
          </Link>
          <Link
            href="/admin/bookings"
            className={linkClass(isActive("/admin/bookings"))}
          >
            <CalendarCheck size={18} /> Bookings
          </Link>
          <Link
            href="/admin/payments"
            className={linkClass(isActive("/admin/payments"))}
          >
            <CreditCard size={18} /> Payments
          </Link>
        </div>

        {/* CONTENT */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold text-slate-400 uppercase">
            Content
          </p>
          <Link
            href="/admin/articles"
            className={linkClass(isActive("/admin/articles"))}
          >
            <FileText size={18} /> Articles
          </Link>
          <Link
            href="/admin/banners"
            className={linkClass(isActive("/admin/banners"))}
          >
            <Image size={18} /> Promo Banners
          </Link>
          <Link
            href="/admin/faq"
            className={linkClass(isActive("/admin/faq"))}
          >
            <HelpCircle size={18} /> FAQ
          </Link>
        </div>

        {/* SYSTEM */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold text-slate-400 uppercase">
            System
          </p>
          <Link
            href="/admin/broadcast"
            className={linkClass(isActive("/admin/broadcast"))}
          >
            <Bell size={18} /> Broadcast
          </Link>
          <Link
            href="/admin/settings"
            className={linkClass(isActive("/admin/settings"))}
          >
            <Settings size={18} /> Settings
          </Link>
        </div>
      </nav>
    </aside>
  );
}
