import React, { useState } from "react";
import classes from "./QuizMath.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

const QuizMath = (props) => {
  const [state, setState] = useState({
    isFinished: false,
    activeNumber: 0,
    results: {},
    answerState: null,
    quiz: [
      {
        question: "Find the sum of 111 + 222 + 333",
        rightAnswer: 4,
        id: 1,
        answers: [
          { text: "1000", id: 1 },
          { text: "567", id: 2 },
          { text: "112", id: 3 },
          { text: "666", id: 4 },
        ],
      },
      {
        question: "What's 7x8 ?",
        rightAnswer: 1,
        id: 2,
        answers: [
          { text: "56", id: 1 },
          { text: "62", id: 2 },
          { text: "49", id: 3 },
          { text: "54", id: 4 },
        ],
      },
      {
        question: 'Who invented the "0" ?',
        rightAnswer: 3,
        id: 3,
        answers: [
          { text: "Fibonacci", id: 1 },
          { text: "Plato", id: 2 },
          { text: "Mohammed ibn-Musa al-Khowarizmi", id: 3 },
          { text: "Pythagoras", id: 4 },
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

  return (
    <div className={classes.QuizMath}>
      <h1>Quiz.Math</h1>

      {state.isFinished ? (
        <FinishedQuiz
          results={state.results}
          quiz={state.quiz}
          onRetry={onRetryHandler}
        />
      ) : (
        <div className={classes.QuizMathWrapper}>
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

export { QuizMath };
