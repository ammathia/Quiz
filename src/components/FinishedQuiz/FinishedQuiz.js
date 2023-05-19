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

        {/* <li>
          <strong>1. </strong>
          How are you?
          <i className={"fa fa-times " + classes.error}></i>
        </li>
        <li>
          <strong>2. </strong>
          How are you?
          <i className={"fa fa-check " + classes.success}></i>
        </li> */}
        <hr />
        <div className={classes.corAns}>
          <p>
            <strong>
              {" "}
              Right answers {successCount} out of {props.quiz.length}{" "}
            </strong>
          </p>
          <button type="button" className={classes.btn}>
            Restart
          </button>
        </div>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
