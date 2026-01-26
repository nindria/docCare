export default function DoctorDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Dashboard Dokter</h1>
      <p className="mt-1 text-sm text-slate-500">
        Selamat datang kembali 👋 Berikut ringkasan aktivitas hari ini
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Booking Hari Ini</p>
          <h2 className="text-2xl font-bold text-[#1E5468]">8 Pasien</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Chat Belum Dibalas</p>
          <h2 className="text-2xl font-bold text-[#1E5468]">3 Pesan</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Jadwal Hari Ini</p>
          <h2 className="text-2xl font-bold text-[#1E5468]">09:00 - 15:00</h2>
        </div>
      </div>
    </div>
  );
}
