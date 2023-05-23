import React from "react";
import classes from "./ToggleMenu.module.scss";

function ToggleMenu(props) {
  const cls = [classes.ToggleMenu, "fa"];
  if (props.isOpen) {
    cls.push("fa-times");
    cls.push(classes.open);
  } else {
    cls.push("fa-bars");
  }
  return <i onClick={props.onToggle} className={cls.join(" ")}></i>;
}

export default ToggleMenu;
