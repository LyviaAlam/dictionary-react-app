import { useState } from "react";
import axios from "axios";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <div>Synonyms:</div>
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  }
}
