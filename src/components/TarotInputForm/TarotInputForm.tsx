import "./TarotInputForm.scss";

function TarotInputForm() {
    return(
        <form className="input">
            <textarea className="input__field" placeholder="Ask the mystical code spirits about your coding journey, career path, or technical challenges..." />
            <div className="input__button">Consult The Cards</div>
        </form>
    )
}

export default TarotInputForm;