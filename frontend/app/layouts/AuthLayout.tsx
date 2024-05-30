import React from 'react';
import { Inter } from 'next/font/google';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-sky-900 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-sky-900 mb-8">WYMIENIAMY SIĘ</h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
