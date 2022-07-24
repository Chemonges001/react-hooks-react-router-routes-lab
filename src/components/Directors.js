import React from "react";
import { directors } from "../data";

function Directors() {
  // return <div>{/*{code here}*/}</div>;
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => {
      return <div key={index}>
        <h4>Name: {director.name}</h4>
        Movies: <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>
      </div>
    })}
  </div>;
}

export default Directors;