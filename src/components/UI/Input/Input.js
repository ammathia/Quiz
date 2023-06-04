import React from "react";
import classes from "./Input.module.scss";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const cls = [classes.Input];
  const type = props.type || "text";
  const htmlFor = `${type}-${Math.floor(Math.random() * 10 + 1)}`;
  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor="input">
        <span>{props.label}</span>
      <input
        id={htmlFor}
        placeholder={props.placeholder}
        type={type}
        value={props.value}
        onChange={props.onChange}
        name="input"
      />
      </label>
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Type in correct value"}</span>
      ) : null}
    </div>
  );
};

export default Input;
