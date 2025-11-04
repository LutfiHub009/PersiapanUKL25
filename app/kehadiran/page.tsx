"use client";
import {useState} from "react";

export default function KehadiranPage() { 
    const [daftarHadir, setDaftarHadir] = useState<
    { id: number; name: string; date: string; status: string }[]
  >([
    { id: 1, name: "Budi", date: "2025-11-04", status: "Hadir" },
  ]);

  const [name, setNama] = useState("");

  // fungsi buat nandain hadir
  const  handleKehadarian = (e: React.FormEvent) => {
    if (!name) {
        alert("Masukin nama dulu dong");
        return;
    }

    const today = new Date().toISOString().split("T")[0]; // format YYYY-MM-DD

    const newEntry = {
        id: Date.now(),
        name,
        date: today,
        status: "Hadir",
    };
    setDaftarHadir([...daftarHadir, newEntry]);
    setNama("");
  };
return (
    <main className="container mx-auto p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Presensi Harian
        </h1>

        {/* Form untuk memasukan Nama */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Masukkan nama"
            className="border flex-1 px-3 py-2 rounded-md"
            value={name}
            onChange={(e) => setNama(e.target.value)}
          />
          <button
            onClick={handleKehadarian}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Hadir Hari Ini
          </button>
        </div>

        {/* Tabel Riwayat Presensi */}
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {daftarHadir.map((att) => (
              <tr key={att.id}>
                <td className="border p-2">{att.id}</td>
                <td className="border p-2">{att.name}</td>
                <td className="border p-2">{att.date}</td>
                <td className="border p-2 text-green-600 font-semibold">
                  {att.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

