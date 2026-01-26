import Image from "next/image";

export default function AdminTopbar() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 rounded-lg border px-4 py-2 text-sm outline-none focus:border-teal-400"
      />

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-teal-100 p-2 text-teal-600">🔔</button>

        <div className="flex items-center gap-2">
          <Image
            src="/img/admin.jpg"
            alt="Admin"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-slate-700">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}
