import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

function Drawer(props) {
  const cls = [classes.Drawer];
  if (!props.isOpen) {
    cls.push(classes.closed);
  }

  const onClickHandler = () => {
    props.onClose();
  };

  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>
          <li>
            <NavLink onClick={onClickHandler} to="/QuizList">
              QuizList
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onClickHandler} to="/Login">
              Login
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink to="/CreateQuiz" onClick={onClickHandler}>
              CreateQuiz
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onClickHandler} to="/">
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/Quizmath",
                search: "?a=1&b=2",
                hash: "wfm-hash",
              }}
              onClick={onClickHandler}
            >
              QuizMath
            </NavLink>
          </li>
        </ul>
        <p className={classes.about}>Made with React</p>
      </nav>
      {props.isOpen ? <Backdrop onClose={props.onClose} /> : null}
    </>
  );
}

export default Drawer;
