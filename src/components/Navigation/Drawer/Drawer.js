import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [1, 2, 3];
function Drawer(props) {
  const cls = [classes.Drawer];
  if (!props.isOpen) {
    cls.push(classes.closed);
  }
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="">Link {link}</a>
        </li>
      );
    });
  };
  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks()}</ul>
        <p className={classes.about}>Made with React</p>
      </nav>
      {props.isOpen ? <Backdrop onClose={props.onClose} /> : null}
    </>
  );
}

export default Drawer;
