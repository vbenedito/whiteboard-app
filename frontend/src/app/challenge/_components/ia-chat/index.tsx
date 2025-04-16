"use client";

type Props = {
  challengeId: string;
};

export default function AIChatButton({ challengeId }: Props) {
  const handleClick = () => {
    alert(
      `Você está falando com o entrevistador sobre o desafio: ${challengeId}`
    );
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Perguntar ao entrevistador
    </button>
  );
}
