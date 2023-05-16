import React, {useState} from "react"
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";


const Quiz = props => {

    const [state, setState] = useState({
        activeNumber: 0,
        quiz: [ {
            question: "What is the Earth's radius?",
            rightAnswer: 2,
            answers: [ 
            {text:"10420.12 km", id: 1},
            {text:"6371 km", id: 2},
            {text:"3389 km", id: 3},
            {text:"300,000 km/s", id: 4},
        ]}
        ]
    });


    const onClickAnswerHandler = answerId => {
        console.log(answerId)
    }

    return(
        <div className={classes.Quiz}>
            <h1>Quiz</h1>

            <div className={classes.QuizWrapper}>
                <ActiveQuiz 
                onAnswerClick={onClickAnswerHandler}
                quizLength={state.quiz.length}
                answerNumber={state.activeNumber + 1}
                 question={state.quiz[0].question} answers={state.quiz[0].answers} />
            </div>
        </div>
    )
}

export default Quiz;