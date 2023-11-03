/* eslint-disable no-unused-vars */
import React from "react";
import ComChildren from "./ComChildren";
let count = 1000;
export default function ComParent() {
  function sayhi(sayHi) {
    alert(sayHi);
  }
  return (
    <>
      <div>comParent</div>
      <ComChildren count={count} sayHi={sayhi} />
    </>
  );
}
