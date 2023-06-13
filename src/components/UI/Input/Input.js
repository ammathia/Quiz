import React from "react";
import classes from "./Input.module.scss";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const cls = [classes.Input];
  const type = props.type || "text";
  const htmlFor = `${type}-${Math.floor(Math.random() * 10 + 1)}`;
  let placeholder1 = props.placeholder;
  if (isInvalid(props)) {
    cls.push(classes.invalid);
    // placeholder1 = props.errorMessage;
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor="input">
        <span>{props.label}</span>
        <input
          maxLength={props.maxLength}
          id={htmlFor}
          placeholder={placeholder1}
          type={type}
          value={props.value}
          onChange={props.onChange}
          name="input"
        />
      </label>
      {/* {isInvalid(props) ? (
        <span>{props.errorMessage || "Type in correct value"}</span>
      ) : null} */}
    </div>
  );
};

export default Input;
