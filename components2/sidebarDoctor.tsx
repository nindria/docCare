  "use client";

  import Link from "next/link";
  import { usePathname, useRouter } from "next/navigation";
  import Swal from "sweetalert2";
  import {
    LayoutDashboard,
    CalendarDays,
    MessageCircle,
    ClipboardList,
    User,
    LogOut,
  } from "lucide-react";

  const menu = [
    { name: "Dashboard", href: "/doctor", icon: LayoutDashboard },
    { name: "Booking Pasien", href: "/doctor/bookings", icon: ClipboardList },
    { name: "Jadwal Praktik", href: "/doctor/schedule", icon: CalendarDays },
    { name: "Chat Pasien", href: "/doctor/chat-pasien", icon: MessageCircle },
    { name: "Profil", href: "/doctor/profile", icon: User },
  ];

  export default function DoctorSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
      Swal.fire({
        title: "Yakin mau keluar?",
        text: "Sesi login kamu akan berakhir.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0b8f84",
        cancelButtonColor: "#e94a4a",
        confirmButtonText: "Ya, Keluar",
        cancelButtonText: "Batal",
        background: "#ffffff",
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "rounded-lg px-4 py-2",
          cancelButton: "rounded-lg px-4 py-2",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    };

    return (
      <aside className="fixed left-0 top-0 h-screen w-64 bg-[#F8FAFC] p-4 shadow-xl flex flex-col">
        {/* LOGO */}
        <div className="mb-6 flex items-center gap-3 px-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md">
            🩺
          </div>
          <div>
            <h1 className="text-sm font-semibold text-slate-700">DocPanel</h1>
            <p className="text-xs text-slate-400">Doctor Dashboard</p>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const Icon = item.icon;

            // Logika active menu diperbaiki
            const active =
              item.href === "/doctor"
                ? pathname === "/doctor"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                <Icon
                  size={18}
                  className={`${active ? "text-white" : "text-slate-400"}`}
                />
                {item.name}
              </Link>
            );
          })}

          {/* Tombol Keluar langsung di bawah Profil */}
          <button
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
          >
            <LogOut size={16} />
            Keluar
          </button>
        </nav>
      </aside>
    );
  }
