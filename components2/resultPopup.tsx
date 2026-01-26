"use client";

type ResultPopupProps = {
  status: "success" | "error" | null;
  onClose: () => void;
};

export default function ResultPopup({
  status,
  onClose,
}: ResultPopupProps) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" />

      <div className="z-50 rounded-xl bg-white p-6 text-center">
        <p
          className={`text-sm font-semibold ${
            status === "success"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {status === "success"
            ? "Data anda berhasil disimpan"
            : "Data belum lengkap"}
        </p>

        <button
          onClick={onClose}
          className="mt-4 rounded-lg bg-[#1E5468] px-4 py-2 text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
}
