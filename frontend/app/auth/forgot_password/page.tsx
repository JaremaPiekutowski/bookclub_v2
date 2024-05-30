'use client'

import { useState } from "react";
import AuthLayout from "@/app/layouts/AuthLayout";

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8000/api/v1/users/password_reset/', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <AuthLayout>
            <h1 className="text-4xl font-bold text-sky-900 mb-8">Resetowanie hasła</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-sky-500 text-white py-2 rounded hover:bg-sky-900 transition duration-300">
                    Wyślij link resetujący hasło
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </AuthLayout>
    );
}