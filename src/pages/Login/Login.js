import React from "react";
import classes from "./Login.module.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { useState } from "react";

function emailValidation(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
const Login = (props) => {
  const [state, setState] = useState({
    formControls: {
      email: {
        value: "",
        type: "email",
        placeholder: "E-mail",
        errorMessage: "Type in correct value",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        placeholder: "Password",
        errorMessage: "Type in min 7 characters",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 7,
        },
      },
    },
  });

  const loginHandler = () => {};
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  function validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = emailValidation(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }
  const onChandeHandler = (event, controlName) => {
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    formControls[controlName] = control;
    setState({ formControls });
  };
  function renderInputs() {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          placeholder={control.placeholder}
          valid={control.valid}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          touched={control.touched}
          onChange={(event) => {
            onChandeHandler(event, controlName);
          }}
        />
      );
    });
  }
  return (
    <div className={classes.Login}>
      <h1 className={classes.title}>Log-in to your account</h1>
      <div className={classes.authContainer}>
        <form onSubmit={onSubmitHandler}>
          {renderInputs()}
          {/* <Input placeholder="E-mail" errorMessage="TEswevewvewwevt"></Input>
          <Input
            type="password"
            placeholder="Password"
            errorMessage="TEswevewvewwevt"
          ></Input> */}
          <Button onClick={loginHandler}>Log-in</Button>

          <p className={classes.create}>Create account</p>
        </form>
      </div>
    </div>
  );
};

export { Login };
