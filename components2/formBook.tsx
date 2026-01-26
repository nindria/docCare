"use client";

type FormData = {
  name: string;
  birth: string;
  phone: string;
  email: string;
  gender: string;
};

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
};

export default function FormBook({
  open,
  onClose,
  form,
  setForm,
  onSubmit,
}: RegisterModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-50 w-full max-w-md rounded-xl bg-white p-6">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        {/* HEADER */}
        <h2 className="text-lg font-semibold text-center text-[#42AAAA]">
          Yuk, Buat Akun Kamu!
        </h2>
        <p className="mt-1 text-sm text-center text-gray-500">
          Isi data diri sesuai KTP atau paspor
        </p>

        {/* FORM */}
        <div className="mt-4 space-y-4">
          {/* Nama */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm hover:border-[#1E5468]"
            />
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Tanggal Lahir
            </label>
            <input
              type="date"
              value={form.birth}
              onChange={(e) =>
                setForm({ ...form, birth: e.target.value })
              }
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm hover:border-[#1E5468]"
            />
          </div>

          {/* Jenis Kelamin */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Jenis Kelamin
            </label>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setForm({ ...form, gender: "Laki-laki" })
                }
                className={`rounded-lg border p-3 text-sm ${
                  form.gender === "Laki-laki"
                    ? "border-[#3B9797]"
                    : "hover:border-[#3B9797]"
                }`}
              >
                👨 Laki-Laki
              </button>
              <button
                type="button"
                onClick={() =>
                  setForm({ ...form, gender: "Perempuan" })
                }
                className={`rounded-lg border p-3 text-sm ${
                  form.gender === "Perempuan"
                    ? "border-[#3B9797]"
                    : "hover:border-[#3B9797]"
                }`}
              >
                👩 Perempuan
              </button>
            </div>
          </div>

          {/* No WhatsApp */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Nomor WhatsApp
            </label>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm hover:border-[#1E5468]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#1E5468]">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm hover:border-[#1E5468]"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={onSubmit}
            className="w-full rounded-lg bg-[#3B9797] py-2 text-sm font-semibold text-white hover:bg-[#358787]"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
