import React from "react";
import classes from "./Select.module.scss";

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.floor(Math.random() * 100)}`;
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select value={props.value} id={htmlFor} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
