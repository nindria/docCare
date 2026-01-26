import Image from "next/image";

export default function DoctorTopbar() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 rounded-lg border px-4 py-2 text-sm outline-none focus:border-teal-400"
      />

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-teal-100 p-2 text-teal-600">
          🔔
        </button>
<div className="flex items-center gap-2">
  <div className="relative h-10 w-10 overflow-hidden rounded-full">
    <Image
  src="/img/dokter1.JPG"
  alt="Doctor"
  width={40}
  height={40}
  className="rounded-full object-cover"
  style={{ width: "40px", height: "40px" }}
/>

  </div>
  <span className="text-sm font-semibold text-slate-700">
    Dr. Indria
  </span>
</div>

      </div>
    </div>
  );
}
