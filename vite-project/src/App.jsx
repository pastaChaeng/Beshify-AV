import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [isTextCopied, setIsTextCopied] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addEmojis = () => {
    const words = inputText.split(" ");
    const modifiedWords = words.map((word) => {
      return `${word} 🤸‍♀️`; // Add a beshy-emoji to each word
    });
    const modifiedText = modifiedWords.join(" ");
    setModifiedText(modifiedText);
    setIsTextCopied(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(modifiedText);
    setIsTextCopied(true);
  };

  

  return (
    <div className="App">
      <div className="text-generator">
        <h2>WELCOME TO MY LIFE BESHY KO 🤸‍♀️🤸‍♀️🤸‍♀️</h2>
        <textarea
          placeholder="Enter your text beshy..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={addEmojis}>Generate</button>
        {modifiedText && (
          <div>
            <h2>Well done!</h2>
            <p>{modifiedText}</p>
            <div className="actions">
              <button onClick={copyText}>
                {isTextCopied ? (
                  <>
                    <FontAwesomeIcon icon={faCopy} /> Copied!
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCopy} /> Copy Text
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <footer className="footer">
        Developed by <a href="https://github.com/pastaChaeng">Arlene Joy Nacion</a>
      </footer>
    </div>
  );
}

export default App;
