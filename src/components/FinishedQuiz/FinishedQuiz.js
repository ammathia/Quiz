import React from "react";
import classes from "./FinishedQuiz.module.scss";

const FinishedQuiz = () => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={""}></i>
        </li>
        <li>
          <strong>2. </strong>
          How are you?
          <i className={""}></i>
        </li>
        <p style={{ margin: "10px" }}>Right answers 4 out of 12</p>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
