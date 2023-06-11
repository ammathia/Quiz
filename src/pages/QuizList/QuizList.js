import React from "react";
import classes from "./QuizList.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

const QuizList = () => {
  const [state, setState] = useState({
    quizes: [],
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      const quizes = [];
      const response = await axios.get("/quizes.json");
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Quiz ${index + 1}`,
        });
      });
      setState({
        quizes,
        loading: false,
      });
    }

    fetchData().catch((er) => {
      console.log(er);
    });
  }, []);

  const renderQuizes = () => {
    return state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/src/pages/Quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  };
  return (
    <div className={classes.container}>
      <h1 style={{ marginTop: "2rem" }}>
        Here are some available quizes fetched from server:
      </h1>
      {state.loading ? <Loader /> : <ul> {renderQuizes()}</ul>}
      {/* <li>
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
      </li> */}
    </div>
  );
};

export { QuizList };
