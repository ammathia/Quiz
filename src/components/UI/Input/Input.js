import React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  const cls = [classes.Input];
  const type = props.type || "text";
  const htmlFor = `${type}-${Math.floor(Math.random() * 10 + 1)}`;
  if (true) {
    cls.push(classes.invalid);
  }
  return (
    <div className={cls.join(" ")}>
      <input
        id={htmlFor}
        placeholder={props.placeholder}
        type={type}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default Input;
