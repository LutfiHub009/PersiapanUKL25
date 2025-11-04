"use client";
import {useState} from "react";

export default function HasilPage() {
// data dummy kehadiran
const [dataKehadiran] = useState([
    { name: 'Johny papa', hadir: 20, sakit: 2, izin: 1, alpha: 0 },
    { name: 'suki Smith', hadir: 18, sakit: 0, izin: 3, alpha: 2 },
    { name: 'Ali Johnson', hadir: 22, sakit: 1, izin: 0, alpha: 0 },
]);
 const totalHadir = dataKehadiran.reduce((sum, d) => sum + d.hadir, 0);
  const totalIzin = dataKehadiran.reduce((sum, d) => sum + d.izin, 0);
  const totalAlpha = dataKehadiran.reduce((sum, d) => sum + d.alpha, 0);

  return (
    <main className="container mx-auto p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Rekap Kehadiran Bulanan
        </h1>

        {/* Tabel Rekap */}
        <table className="w-full border-collapse border text-left mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Nama</th>
              <th className="border p-2">Hadir</th>
              <th className="border p-2">Izin</th>
              <th className="border p-2">Alpha</th>
            </tr>
          </thead>
          <tbody>
            {dataKehadiran.map((user) => (
              <tr key={user.name}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.hadir}</td>
                <td className="border p-2">{user.izin}</td>
                <td className="border p-2">{user.alpha}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="bg-gray-50 border p-4 rounded-md">
          <p>
            <strong>Total Hadir:</strong> {totalHadir}
          </p>
          <p>
            <strong>Total Izin:</strong> {totalIzin}
          </p>
          <p>
            <strong>Total Alpha:</strong> {totalAlpha}
          </p>
        </div>
      </div>
    </main>
  );
}
