import React from "react";
import classes from "./AnswersList.module.scss"


const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {

        })}
    </ul>
)