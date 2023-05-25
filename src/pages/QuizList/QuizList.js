import React from "react";
import classes from "./QuizList.module.scss";
import { NavLink } from "react-router-dom";

const QuizList = () => {
  return (
    <div className={classes.container}>
      <li>
        <NavLink to="/">Quiz</NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/Quizmath",
            search: "?a=1&b=2",
            hash: "wfm-hash",
          }}
        >
          QuizMath
        </NavLink>
      </li>
    </div>
  );
};

export { QuizList };
