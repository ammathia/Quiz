import React from "react";
import classes from "./Login.module.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const Login = (props) => {
  const LoginHandler = () => {};
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.Login}>
      <h1 className={classes.title}>Log-in to your account</h1>
      <div className={classes.authContainer}>
        <form onSubmit={onSubmitHandler}>
          <Input placeholder="Login"></Input>
          <Input
            type="password"
            placeholder="Password"
            errorMessage="TEswevewvewwevt"
          ></Input>
          <Button>Log-in</Button>

          <p className={classes.create}>Create account</p>
        </form>
      </div>
    </div>
  );
};

export { Login };
