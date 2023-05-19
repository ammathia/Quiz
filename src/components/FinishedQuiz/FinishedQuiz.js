import React from "react";
import classes from "./FinishedQuiz.module.scss";

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
          <button onClick={props.onRetry} type="button" className={classes.btn}>
            Restart
          </button>
        </div>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
