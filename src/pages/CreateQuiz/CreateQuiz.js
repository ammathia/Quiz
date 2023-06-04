import React from "react";
import classes from "./CreateQuiz.module.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";
import Select from "../../components/UI/Select/Select";
import { useState } from "react";
import { createControl } from "../../form/formFrameWork";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

function createOption(number) {
  return createControl(
    {
      label: "your answer",
      placeholder: `option ${number}`,
      errorMessage: "can't be empty",
      id: number,
      value: "",
    },
    { required: true }
  );
}

function createControlForms() {
  return {
    question: createControl(
      {
        label: "Write down your question",
        placeholder: "your question here",
        errorMessage: "can't be empty",
        value: "",
      },
      { required: true }
    ),
    option1: createOption(1),
    option2: createOption(2),
    option3: createOption(3),
    option4: createOption(4),
  };
}

const CreateQuiz = () => {
  const [state, setState] = useState({
    quiz: [],
    rightAnswerid: 1,
    formControls: createControlForms(),
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const addQuestionHandler = () => {};
  const addQuizHandler = () => {};

  const onChangeHandler = (value, controlName) => {};

  const renderControls = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            placeholder={control.placeholder}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(ev) => onChangeHandler(ev.target.value, controlName)}
          ></Input>
          {controlName === "question" ? <br></br> : null}
        </Auxiliary>
      );
    });
  };
  const selectChangeHandler = (event) => {};
  const select = (
    <Select
      label="Choose right answer"
      value={state.rightAnswerid}
      onChange={selectChangeHandler}
      options={[
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4", value: "4" },
      ]}
    />
  );
  return (
    <div className={classes.CreateQuiz}>
      <h1>Create your own Quiz</h1>
      <div className={classes.container11}>
        <form name="formCreate" onSubmit={onSubmitHandler}>
          {renderControls()}
          <br />
          <Button onClick={addQuestionHandler}>Create Quiz</Button>
          <Button onClick={addQuizHandler}>Add Question</Button>
          <br />
          {select}
          {/* <select className="form-select" aria-label="Default select example">
            <option defaultValue="dcs">Choose the number of answers</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
        </form>
      </div>
    </div>
  );
};

export { CreateQuiz };
