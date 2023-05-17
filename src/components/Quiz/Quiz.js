import React, { useState } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";

const Quiz = (props) => {
  const [state, setState] = useState({
    activeNumber: 0,
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
          { text: "10 bn km", id: 4 },
        ],
      },
    ],
  });

  const onClickAnswerHandler = (answerId) => {
    setState({ ...state, activeNumber: state.activeNumber + 1 });
    console.log(state.quiz.length);
  };

  return (
    <div className={classes.Quiz}>
      <h1>Quiz</h1>

      <div className={classes.QuizWrapper}>
        <ActiveQuiz
          onAnswerClick={onClickAnswerHandler}
          quizLength={state.quiz.length}
          answerNumber={state.activeNumber + 1}
          question={state.quiz[state.activeNumber].question}
          answers={state.quiz[state.activeNumber].answers}
        />
      </div>
    </div>
  );
};

export default Quiz;
