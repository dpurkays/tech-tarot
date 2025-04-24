import { useState } from "react";
import "./TarotInputForm.scss";

type TarotInputProps = {
    setUserQuestion: (question: string) => void;
}

function TarotInputForm({setUserQuestion} : TarotInputProps) {
    const [question, setQuestion] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!question.trim()) return;
        setUserQuestion(question);
        setQuestion("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    return(
        <form onSubmit={handleSubmit} className="input">
            <textarea 
                className="input__field" 
                placeholder="Ask the mystical code spirits about your coding journey, career path, or technical challenges..." 
                value={question}
                onChange={handleChange}
            />
            <button type="submit" className="input__button">Consult The Cards</button>
        </form>
    )
}

export default TarotInputForm;