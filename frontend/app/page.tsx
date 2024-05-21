import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg items-center justify-center">
        <h1 className="text-4xl font-bold text-emerald-600 mb-8">Wymieniamy się</h1>
        <div className="flex flex-col justify-center space-y-4">
          <Link href="/auth/register" className="text-black text-center font-bold px-4 py-2 rounded hover:bg-emerald-700 transition duration-300">
              Zarejestruj się
          </Link>
          <Link href="/auth/signin"className="text-black text-center font-bold px-4 py-2 rounded hover:bg-emerald-700 transition duration-300">
              Zaloguj się
          </Link>
        </div>
      </div>
    </div>
  )
}
