import { useState } from "react";
import axios from "axios";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank">
                  <img
                    src={photos.src.landscape}
                    alt={photos.alt}
                    className="img-fluid"
                  />
                  ;
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
