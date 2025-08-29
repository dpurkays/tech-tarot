import { useState } from "react";

type TarotInputProps = {
  setUserQuestion: (question: string) => void;
};

function TarotInputForm({ setUserQuestion }: TarotInputProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) return;
    setUserQuestion(question);
    setQuestion("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <section className="flex flex-col gap-4 lg:gap-8 px-8 py-16 bg-indigo-800/30 rounded-2xl shadow-lg shadow-amber-500/30 ring-2 ring-purple-500/60">
      <h2 className="text-2xl font-bold self-center text-amber-400">
        Ask the Digital Oracle
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
        <textarea
          className="h-32 w-60 lg:w-80 p-2 rounded-2xl"
          placeholder="Ask the mystical code spirits about your coding journey, career path, or technical challenges..."
          value={question}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-3 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold hover:shadow-md hover:shadow-fuchsia-400/50 transition duration-300 ease-in-out"
        >
          Consult The Cards
        </button>
      </form>
    </section>
  );
}

export default TarotInputForm;
