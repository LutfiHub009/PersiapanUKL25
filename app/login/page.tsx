"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [nama, setNama] = useState("");
  const [sandi, setSandi] = useState("");
  const [pesan, setPesan] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // validasi sederhana
    if (nama === "" || sandi === "") {
      setPesan("harap isi semua kolom");
    } else {
      setPesan("berhasil masuk");
    }
  };

  return (
    <main className="container mx-auto p-10 bg-amber-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          halaman login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Username</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md"
              placeholder="masukkan usernamenya"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Sandi</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md"
              placeholder="masukkan sandinya"
              value={sandi}
              onChange={(e) => setSandi(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition"
          >
            masuk
          </button>
        </form>

        {pesan && (
          <p className="mt-4 text-center text-gray-700 font-medium">{pesan}</p>
        )}

        <div className="text-center mt-4">
          <Link
            href="/dashboard"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Ke Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
