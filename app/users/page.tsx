"use client";
import { useState } from "react";

export default function UsersPage() {
  // data pengguna sementara
  const [users, setUsers] = useState([
    { id: 1, nama: "Budi siregar", email: "budiSiregar@contoh.com" },
    { id: 1, nama: "Suget boyolali", email: "SugetBoyolali@contoh.com" },
  ]);

  // state untuk form input
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  // fungsi untuk menambahkan pengguna baru
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || !email) return alert("isi semua bagian dulu dong");

    const newUser = {
      id: Date.now(),
      nama,
      email,
    };

    // Update state
    setUsers([...users, newUser]);

    // Reset form input
    setNama("");
    setEmail("");
  };
  return (
    <main className="container mx-auto p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Daftar pengguna
        </h1>

        {/* Form untuk menambahkan pengguna baru */}
        <form onSubmit={handleAddUser} className="mb-6">
          <div className="mb-3">
            <label className="block mb-1 font-semibold">Nama</label>
            <input
              type="text"
              className="border w-full px-3 py-2 rounded-md"
              placeholder="Masukkan nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="text"
              className="border w-full px-3 py-2 rounded-md"
              placeholder="Masukan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Tambah Pengguna
          </button>
        </form>

        {/* Tabel daftar pengguna */}
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.nama}</td>
                <td className="border p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
