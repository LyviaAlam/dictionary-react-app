import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.keyword);
  const [definition, setDefinition] = useState("");
  const [pageLoad, setPageload] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function handleWordInput(event) {
    setWord(event.target.value);
  }

  function search() {
    // documentation : https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function LoadPage() {
    setPageload(true);
    search();
  }
  if (pageLoad) {
    return (
      <div className="dictionary">
        <div className="search">
          <h5>What word do you want to look up?</h5>
          <form onSubmit={handleSubmit} onChange={handleWordInput}>
            <input
              type="Search"
              placeholder="Enter word here... e.g. inspiration"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </div>

        <Results results={definition} />
      </div>
    );
  } else {
    LoadPage();
    return "Enter a Word";
  }
}
