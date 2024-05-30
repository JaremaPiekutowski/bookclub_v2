'use client';

import AuthLayout from '../../layouts/AuthLayout';
import { useState, FormEvent } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result && result.error) {
      setError(result.error);
    }
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-sky-500 mb-8">Logowanie</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="username"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-sky-500 text-white py-2 rounded hover:bg-sky-900 transition duration-300">
          Zaloguj się
        </button>
        <Link href="/auth/forgot_password" className="text-sm text-sky-900">
          Zapomniałeś hasła?
        </Link>
      </form>
    </AuthLayout>
  )
}
