import React from "react";
import classes from "./ActiveQuiz.module.scss"



function ActiveQuiz() {



    return(
        <div className={classes.ActiveQuiz}>
            <p>
                <span className={classes.ActiveQuestion}>
                <strong>
                    What is the radius if the Earth?
                </strong>
                </span>
                <small>1 of 12</small>
            </p>

            <ol>
                <li>8000km</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ol>
        </div>
    )
}

export default ActiveQuiz;