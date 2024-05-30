import AuthLayout from "./layouts/AuthLayout";
import Link from "next/link";

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center space-y-4">
        <Link href="/auth/register" className="text-black text-center font-bold px-4 py-2 rounded hover:bg-sky-500 transition duration-300">
            Zarejestruj się
        </Link>
        <Link href="/auth/login"className="text-black text-center font-bold px-4 py-2 rounded hover:bg-sky-500 transition duration-300">
            Zaloguj się
        </Link>
      </div>
  </AuthLayout>
  )
}
