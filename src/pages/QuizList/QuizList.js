import React from "react";
import classes from "./QuizList.module.scss";
import { Link } from "react-router-dom";

const QuizList = () => {
  return (
    <div className={classes.container}>
      <h1 style={{ marginTop: "2rem" }}>
        Here are some available quizes for you:
      </h1>
      <li>
        <Link to="/">Quiz</Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/Quizmath",
            search: "?a=1&b=2",
            hash: "wfm-hash",
          }}
        >
          QuizMath
        </Link>
      </li>
    </div>
  );
};

export { QuizList };
