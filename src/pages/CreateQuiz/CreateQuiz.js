import React from "react";
import classes from "./CreateQuiz.module.scss";
import Input from "../../components/UI/Input/Input";

const CreateQuiz = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.CreateQuiz}>
      <h1>Create your own Quiz</h1>
      <div className={classes.container}>
        <form onSubmit={onSubmitHandler}>
          <p>Write down your question</p>
          <Input></Input>
          <p>Write down your answers</p>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </form>
      </div>
    </div>
  );
};

export { CreateQuiz };
