import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }
  function handleWordInput(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    // documentation : https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
