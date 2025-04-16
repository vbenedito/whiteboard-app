"use client";

import { useRouter } from "next/navigation";

const challenges = [
  { id: "youtube", name: "Design YouTube" },
  { id: "uber", name: "Design Uber" },
  { id: "whatsapp", name: "Design WhatsApp" },
  { id: "google-docs", name: "Design Google Docs" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Escolha um desafio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {challenges.map((challenge) => (
          <button
            key={challenge.id}
            onClick={() => router.push(`challenge/${challenge.id}`)}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:bg-blue-50 transition hover:cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-black">
              {challenge.name}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Simule uma entrevista resolvendo o desafio {challenge.name}.
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
