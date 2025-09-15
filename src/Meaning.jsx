import { useState } from "react";
import axios from "axios";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
