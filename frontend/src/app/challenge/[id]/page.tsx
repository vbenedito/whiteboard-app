"use client";

import { useParams } from "next/navigation";
import Whiteboard from "../_components/whiteboard";
import AIChatButton from "../_components/ia-chat";

export default function ChallengePage() {
  const params = useParams();
  const challengeId = params?.id;

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <Whiteboard />
      </div>

      <aside className="w-80 bg-gray-900 text-white p-4 border-l border-gray-800 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4 capitalize">
            Desafio: {challengeId?.toString().replace("-", " ")}
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Use o whiteboard para desenhar sua solução. Clique no botão abaixo
            para falar com o entrevistador.
          </p>
        </div>

        <AIChatButton />
      </aside>
    </div>
  );
}
