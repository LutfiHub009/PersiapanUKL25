import Image from "next/image";
export default function Dashboard() {
  return (
    <main className="container mx-auto p-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Selamat Datang di Dashboard!
        </h1>
        <p>Ini hanyalah tampilan saja.</p>
      </div>
      <div className="mt-6 flex justify-center">
        <Image src="/globe.svg" alt="Globe Icon" width={50} height={25} />
      </div>
    </main>
  );
}
