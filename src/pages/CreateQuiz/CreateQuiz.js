import React from "react";
import classes from "./CreateQuiz.module.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";
import Select from "../../components/UI/Select/Select";
import { useState } from "react";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFrameWork";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";

function createOption(number) {
  return createControl(
    {
      label: `your option ${number}`,
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
    isFormValid: false,
    rightAnswerid: "Choose right answer",
    selectTouch: false,
    formControls: createControlForms(),
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const addQuestionHandler = (event) => {
    event.preventDefault();

    const quiz = state.quiz.concat();
    const index = quiz.length + 1;

    const { question, option1, option2, option3, option4 } = state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerid: state.rightAnswerid,
      answers: [
        {
          text: option1.value,
          id: option1.id,
        },
        {
          text: option2.value,
          id: option2.id,
        },
        {
          text: option3.value,
          id: option3.id,
        },
        {
          text: option4.value,
          id: option4.id,
        },
      ],
    };
    quiz.push(questionItem);
    setState({
      quiz,
      isFormValid: false,
      rightAnswerid: "Choose right answer",
      selectTouch: false,
      formControls: createControlForms(),
    });
  };
  const createQuizHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://react-quiz-d85ec-default-rtdb.europe-west1.firebasedatabase.app/quizes.json",
        state.quiz
      );
      console.log(response);
      setState({
        quiz: [],
        isFormValid: false,
        rightAnswerid: "Choose right answer",
        selectTouch: false,
        formControls: createControlForms(),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const onChangeHandler = (value, controlName) => {
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;
    control.touched = true;
    // if (control.value === "") {
    //   control.touched = false;
    // }
    control.valid = validate(control.value, control.validation);
    formControls[controlName] = control;
    setState({
      ...state,
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

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
  const selectChangeHandler = (event) => {
    setState({
      ...state,
      rightAnswerid: +event.target.value,
      selectTouch: true,
    });
  };
  const select = (
    <Select
      label="Choose right answer"
      value={state.rightAnswerid}
      onChange={selectChangeHandler}
      options={[
        { text: "Choose one right answer", value: "default" },
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
          {select}
          <br />
          <Button
            disabled={!state.selectTouch || !state.isFormValid}
            onClick={addQuestionHandler}
          >
            Add Question
          </Button>
          <Button
            disabled={state.quiz.length === 0}
            onClick={createQuizHandler}
          >
            Create Quiz
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
};

export { CreateQuiz };
