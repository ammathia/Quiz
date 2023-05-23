import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;
