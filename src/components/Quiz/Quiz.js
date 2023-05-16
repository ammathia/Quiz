import React, {useState} from "react"
import classes from "./Quiz.module.scss"
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";


const Quiz = props => {

    const [state, setState] = useState("");

    return(
        <div className={classes.Quiz}>
            <h1>Quiz</h1>

            <div className={classes.QuizWrapper}>
                <ActiveQuiz />
            </div>
        </div>
    )
}

export default Quiz