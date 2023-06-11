import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz";
import { useParams } from "react-router-dom";

const Quiz = (props) => {
  const { id } = useParams();
  const [state, setState] = useState({
    isFinished: false,
    activeNumber: 0,
    results: {},
    answerState: null,
    quiz: [
      {
        question: "What is the Earth's radius?",
        rightAnswer: 2,
        id: 1,
        answers: [
          { text: "10420.12 km", id: 1 },
          { text: "6371 km", id: 2 },
          { text: "3389 km", id: 3 },
          { text: "300,000 km/s", id: 4 },
        ],
      },
      {
        question: "What is the distance between the Earth and the Sun?",
        rightAnswer: 3,
        id: 2,
        answers: [
          { text: "1000 km", id: 1 },
          { text: "384000 km", id: 2 },
          { text: "149 mln km", id: 3 },
          { text: "10 bln km", id: 4 },
        ],
      },
      {
        question: 'What is an "astronomical unit" ?',
        rightAnswer: 1,
        id: 3,
        answers: [
          { text: "The distance between the Earth and the Sun", id: 1 },
          { text: "One of the measerments of the metric system", id: 2 },
          { text: "The distance light travels in one year", id: 3 },
          {
            text: "The time taken by the light to travel from the Sun to the Earth",
            id: 4,
          },
        ],
      },
    ],
  });

  const onClickAnswerHandler = (answerId) => {
    if (state.answerState) {
      const key = Object.values(state.answerState)[0];
      if (state.answerState[key] === "success") {
        return;
      }
    }

    const results = state.results;
    const question = state.quiz[state.activeNumber];

    if (question.rightAnswer === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      setState({ ...state, answerState: { [answerId]: "success" }, results });

      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setState({ ...state, isFinished: true });
        } else {
          setState({
            ...state,
            activeNumber: state.activeNumber + 1,
            answerState: null,
          });
        }
      }, 500);
    } else {
      results[question.id] = "error";
      setState({ ...state, answerState: { [answerId]: "error", results } });
    }
  };

  const onRetryHandler = () => {
    setState({
      ...state,
      isFinished: false,
      activeNumber: 0,
      results: {},
      answerState: null,
    });
  };

  const isQuizFinished = () => {
    return state.activeNumber + 1 === state.quiz.length;
  };
  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`/quizes/${id}.json`);
    };
    fetchQuiz();
  }, []);
  return (
    <div className={classes.Quiz}>
      <h1>Quiz</h1>

      {state.isFinished ? (
        <FinishedQuiz
          results={state.results}
          quiz={state.quiz}
          onRetry={onRetryHandler}
        />
      ) : (
        <div className={classes.QuizWrapper}>
          <ActiveQuiz
            onAnswerClick={onClickAnswerHandler}
            quizLength={state.quiz.length}
            answerNumber={state.activeNumber + 1}
            question={state.quiz[state.activeNumber].question}
            answers={state.quiz[state.activeNumber].answers}
            state={state.answerState}
          />
        </div>
      )}
    </div>
  );
};

export { Quiz };
