import { useState } from "react";
import TarotInputForm from "../../components/TarotInputForm/TarotInputForm";
import "./HomePage.scss";
function HomePage() {
    const [userQuestion, setUserQuestion] = useState("");

    return ( 
        <main className="home">
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