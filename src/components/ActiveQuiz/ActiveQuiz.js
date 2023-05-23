import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "../AnswersList/AnswersList";

function ActiveQuiz(props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p>
        <span className={classes.ActiveQuestion}>
          <strong>{props.question}</strong>
        </span>
        <small style={{ fontSize: "1rem", margin: "5px 10px 10px 5px" }}>
          {props.answerNumber} of {props.quizLength}
        </small>
      </p>

      <AnswersList
        onAnswerClick={props.onAnswerClick}
        answers={props.answers}
        state={props.state}
      />
    </div>
  );
}

export default ActiveQuiz;
