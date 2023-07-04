import React from "react";
import classes from "./FinishedQuiz.module.scss";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, cur) => {
    if (props.results[cur] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((item, index) => {
          const cls = [
            "fa",
            props.results[item.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[item.id]],
          ];
          return (
            <li key={index + 1}>
              <strong>{item.question}</strong>
              <i className={cls.join(" ")} />
            </li>
          );
        })}
        <hr />
        <div className={classes.corAns}>
          <strong>
            Correct answers {successCount} out of {props.quiz.length}{" "}
          </strong>
          <Button onClick={props.onRetry}>Restart</Button>
          <Link to="/">QuizList</Link>
        </div>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
