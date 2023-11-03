/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ComBrother from "./ComBrother";

export default function ComChildren({ count, sayHi }) {
  return (
    <>
      {/* <button
        onClick={() => {
          sayHi("nhà bao việc");
        }}
      >
        Call Parent
      </button> */}
      <button
        onClick={function call() {
          alert("gọi em đi");
        }}
      >
        Call me
      </button>
      <div>
        <p>ComChildren {count};</p>
        <ComBrother />
      </div>
    </>
  );
}
