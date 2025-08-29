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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 lg:gap-8 px-8 py-16 bg-slate-600 rounded-2xl border-purple-500"
    >
      <textarea
        className="h-32 w-60 lg:w-80 p-2 rounded-2xl"
        placeholder="Ask the mystical code spirits about your coding journey, career path, or technical challenges..."
        value={question}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="p-3 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold"
      >
        Consult The Cards
      </button>
    </form>
  );
}

export default TarotInputForm;
