import { useState } from "react";
import axios from "axios";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div>Definition: {props.meaning.definition}</div>

        <div>
          Example: <em>{props.meaning.example}</em>
        </div>

        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
        <br />
      </div>
    </div>
  );
}
