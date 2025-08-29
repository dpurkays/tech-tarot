import { useState } from "react";
import TarotInputForm from "../../components/TarotInputForm/TarotInputForm";
function HomePage() {
  const [userQuestion, setUserQuestion] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center pt-12 bg-gradient-to-b from-purple-900 to-black">
      <TarotInputForm setUserQuestion={setUserQuestion} />
      {userQuestion && (
        <section className="reading-question">
          <h2 className="reading-question__title">✨ Your Question ✨</h2>
          <p className="reading-question__text">"{userQuestion}"</p>
        </section>
      )}
    </main>
  );
}

export default HomePage;
