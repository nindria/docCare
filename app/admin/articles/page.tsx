"use client";

import { useState } from "react";
import AdminSidebar from "../../../components2/sidebarAdmin";
import AdminTopbar from "../../../components2/adminTopbar";
import Swal from "sweetalert2";

type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
};

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: "Tips Menjaga Kesehatan Jantung", category: "Jantung", date: "2026-01-10" },
    { id: 2, title: "Cara Mengatasi Insomnia", category: "Tidur", date: "2026-01-12" },
  ]);

  const [form, setForm] = useState({ title: "", category: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSave = () => {
    if (editingId) {
      setArticles((prev) =>
        prev.map((a) => (a.id === editingId ? { ...a, ...form } : a))
      );
      Swal.fire("Berhasil", "Artikel diperbarui", "success");
    } else {
      setArticles((prev) => [
        ...prev,
        { id: Date.now(), ...form, date: new Date().toISOString().split("T")[0] },
      ]);
      Swal.fire("Berhasil", "Artikel ditambahkan", "success");
    }

    setForm({ title: "", category: "" });
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    Swal.fire("Dihapus", "Artikel berhasil dihapus", "success");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <AdminTopbar />
        <div className="p-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h1 className="text-xl font-bold mb-4">Kelola Artikel Kesehatan</h1>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              <input
                type="text"
                placeholder="Judul artikel"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Kategori"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleSave}
                className="bg-cyan-600 text-white rounded-lg text-sm font-semibold"
              >
                {editingId ? "Update" : "Tambah"}
              </button>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-2 text-left">Judul</th>
                  <th className="px-4 py-2 text-left">Kategori</th>
                  <th className="px-4 py-2 text-left">Tanggal</th>
                  <th className="px-4 py-2 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {articles.map((a) => (
                  <tr key={a.id}>
                    <td className="px-4 py-2">{a.title}</td>
                    <td className="px-4 py-2">{a.category}</td>
                    <td className="px-4 py-2">{a.date}</td>
                    <td className="px-4 py-2 text-right space-x-2">
                      <button
                        onClick={() => {
                          setEditingId(a.id);
                          setForm({ title: a.title, category: a.category });
                        }}
                        className="text-blue-600 text-xs font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(a.id)}
                        className="text-red-600 text-xs font-semibold"
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
      </main>
    </div>
  );
}
