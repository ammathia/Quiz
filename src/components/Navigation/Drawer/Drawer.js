import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

function Drawer(props) {
  const cls = [classes.Drawer];
  if (!props.isOpen) {
    cls.push(classes.closed);
  }

  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>
          <li>
            <NavLink to="/">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/QuizMath">QuizMath</NavLink>
          </li>
        </ul>
        <p className={classes.about}>Made with React</p>
      </nav>
      {props.isOpen ? <Backdrop onClose={props.onClose} /> : null}
    </>
  );
}

export default Drawer;
