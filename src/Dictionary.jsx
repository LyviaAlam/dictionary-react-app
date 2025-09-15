import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleWordInput(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching ${word}`);
  }

  return (
    <div>
      <div className="dictionary">
        <form onSubmit={search} onChange={handleWordInput}>
          <input type="Search" />
        </form>
      </div>
    </div>
  );
}
