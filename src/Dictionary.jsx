import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.keyword);
  const [definition, setDefinition] = useState("");
  const [pageLoad, setPageload] = useState(false);
  const [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setDefinition(response.data);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleWordInput(event) {
    setWord(event.target.value);
  }

  function search() {
    // documentation : https://www.shecodes.io/learn/apis/dictionary
    const apiDictionaryKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
    const apiDictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiDictionaryKey}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    // documentation : https://www.pexels.com/api/documentation/
    const apiPexelKey =
      "F6SDVYODT6SVWOPDroBer9BsgA07o2WpUEVG0GZ8l3rkgM4CBj5t16o2";
    const apiPexelUrl = `https://api.pexels.com/v1/search?query=${word}page=1&per_page=9`;
    const headers = { Authorization: `${apiPexelKey}` };
    axios.get(apiPexelUrl, { headers: headers }).then(handlePexelResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    LoadPage();
    return "Enter a Word";
  }
}
