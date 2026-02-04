"use client";

import { useState, ChangeEvent } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

type Article = {
  id: number;
  title: string;
  category: string;
  content: string;
  author: string;
  date: string;
  image: string; // base64 image
};

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    author: "",
    image: "",
  });

  const openAddModal = () => {
    setForm({ title: "", category: "", content: "", author: "", image: "" });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (article: Article) => {
    setForm(article);
    setEditingId(article.id);
    setIsModalOpen(true);
  };

  // 📸 HANDLE IMAGE UPLOAD
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.title || !form.category || !form.content || !form.author || !form.image) {
      Swal.fire("Oops!", "Semua field wajib diisi", "warning");
      return;
    }

    if (editingId !== null) {
      setArticles((prev) =>
        prev.map((a) => (a.id === editingId ? { ...a, ...form } : a))
      );
      Swal.fire("Berhasil", "Artikel diperbarui", "success");
    } else {
      setArticles((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
          date: new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        },
      ]);
      Swal.fire("Berhasil", "Artikel ditambahkan", "success");
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Hapus artikel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
    }).then((res) => {
      if (res.isConfirmed) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
        Swal.fire("Dihapus", "Artikel berhasil dihapus", "success");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />

        <div className="p-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold text-slate-700">
                Kelola Artikel Kesehatan
              </h1>
              <button
                onClick={openAddModal}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                + Tambah Artikel
              </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 text-left">Judul</th>
                    <th className="px-4 py-3 text-left">Kategori</th>
                    <th className="px-4 py-3 text-left">Gambar</th>
                    <th className="px-4 py-3 text-left">Penulis</th>
                    <th className="px-4 py-3 text-left">Tanggal</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {articles.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium">{a.title}</td>
                      <td className="px-4 py-3">{a.category}</td>
                      <td className="px-4 py-3">
                        {a.image && (
                          <img
                            src={a.image}
                            alt={a.title}
                            className="w-14 h-10 object-cover rounded"
                          />
                        )}
                      </td>
                      <td className="px-4 py-3">{a.author}</td>
                      <td className="px-4 py-3 text-slate-500">{a.date}</td>
                      <td className="px-4 py-3 text-right space-x-3">
                        <button
                          onClick={() => openEditModal(a)}
                          className="text-blue-600 text-xs font-semibold hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(a.id)}
                          className="text-red-600 text-xs font-semibold hover:underline"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold mb-4">
                {editingId ? "Edit Artikel" : "Tambah Artikel"}
              </h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Judul Artikel"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Kategori"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Nama Dokter / Penulis"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                {/* UPLOAD GAMBAR */}
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Upload Gambar
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-sm mt-1"
                  />
                  {form.image && (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="mt-2 w-32 h-20 object-cover rounded border"
                    />
                  )}
                </div>

                <textarea
                  placeholder="Isi Artikel"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm h-32"
                />
              </div>

              <div className="flex justify-end gap-2 mt-5">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-semibold"
                >
                  {editingId ? "Update" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
