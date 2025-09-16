import { useState } from "react";
import axios from "axios";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const partOfSpeech = [props.meaning.partOfSpeech];
  const definition = [props.meaning.definition];
  const example = [props.meaning.example];

  if (props.meaning.example) {
    return (
      <div className="meaning">
        <div className="partOfSpeech">{partOfSpeech}</div>
        <div>
          <div>Definition: {definition}</div>
          <div>
            Example: <em>{example}</em>
          </div>
          <div>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="meaning">
        <div className="partOfSpeech">{partOfSpeech}</div>
        <div>
          <div>Definition: {definition}</div>
          <div>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </div>
      </div>
    );
  }
}
