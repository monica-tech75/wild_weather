import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../style/nameinput.css";
import { BackgroundProvider } from "../context/BackgroundContext";
import "../style/backgroundcloud.css";

function NameInput() {
  const { setName } = useOutletContext(); // Utilisation de useOutletContext pour accéder à setName
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("nameStorage");
    if (storedName) {
      setName(storedName);
      navigate("/TagYourCity");
    }
  }, [setName, navigate]);

  const handleChange = (e) => {
    // if(inputValue.length < 12){
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
    localStorage.setItem("nameStorage", inputValue);
    navigate("/TagYourCity");
  };
  const defaultname = `\nPierre (présent!)`;
  const handleSkip = () => {
    setName(defaultname);
    localStorage.removeItem("nameStorage");
    navigate("/TagYourCity");
  };

  return (
    <BackgroundProvider>
      <section className="NameInput">
        <main className="mainname">
          <form className="formname" onSubmit={handleSubmit}>
            <p className="questionTitleName">What's your name?</p>
            <p className="personalize">Let's personalize your experience.</p>
            <input
              type="text"
              className="inputname"
              value={inputValue}
              onChange={handleChange}
              placeholder="Tape your name here..."
              maxLength={12}
            />
            <div className="buttonsname">
              <button className="Validebutton" type="submit">
                Confirm
              </button>
              <button
                className="Passedbutton"
                type="button"
                onClick={handleSkip}
              >
                Skip
              </button>
            </div>
          </form>
        </main>
      </section>
    </BackgroundProvider>
  );
}

export default NameInput;
