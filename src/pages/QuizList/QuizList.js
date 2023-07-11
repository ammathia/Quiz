import React from "react";
import classes from "./QuizList.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import axios from "../../axios/axios-quiz";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuizesStart,
  fetchQuizesSuccess,
  fetchQuizesError,
} from "../../redux/quizSlice";

const QuizList = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quiz);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchQuizesStart());
      const quizes = [];
      const response = await axios.get("/quizes.json");

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Quiz ${index + 1}`,
        });
      });
      dispatch(fetchQuizesSuccess({ quizes }));
    }

    fetchData().catch((e) => {
      console.log(e);
      dispatch(fetchQuizesError(e));
    });
  }, [dispatch]);

  const renderQuizes = () => {
    return state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/Quiz/" + quiz.id}>{quiz.name}</NavLink>
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
    </div>
  );
};

export default connect()(QuizList);
