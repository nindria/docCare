"use client";
import Image from "next/image";

type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  price: number;
  oldPrice: number;
  image: string;
};

type DoctorCardProps = {
  doctor: Doctor;
  onChat: () => void;
};

export default function DoctorCard({ doctor, onChat }: DoctorCardProps) {
  return (
    <div className="flex justify-between rounded-xl border bg-white p-4 shadow-sm">
      
      {/* LEFT SIDE */}
      <div className="flex gap-4">
        <div className="h-28 w-20 flex-shrink-0 overflow-hidden rounded-lg border">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {doctor.name}
          </h3>

          <p className="text-xs text-gray-500">{doctor.specialty}</p>

          <div className="mt-2 flex gap-2 text-xs text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">
              🧳 {doctor.experience}
            </span>
            <span className="rounded bg-gray-100 px-2 py-1">
              👍 {doctor.rating}
            </span>
          </div>

          <div className="mt-2">
            <span className="text-sm font-semibold">
              Rp {doctor.price.toLocaleString("id-ID")}
            </span>
            <span className="ml-2 text-xs text-gray-400 line-through">
              Rp {doctor.oldPrice.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE BUTTON */}
      <div className="flex items-center">
        <button
          onClick={onChat}
          className="rounded-lg bg-[#1E5468] px-4 py-2 text-sm font-semibold text-white hover:bg-[#174556]"
        >
          Book
        </button>
      </div>
    </div>
  );
}
