import React from "react";
import classes from "./CreateQuiz.module.scss";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";

const CreateQuiz = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.CreateQuiz}>
      <h1>Create your own Quiz</h1>
      <div className={classes.container11}>
        <form name="formCreate" onSubmit={onSubmitHandler}>
          <p>Write down your question</p>
          <Input>5h5h5r</Input>
          <p>Write down your answers</p>
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <br />
          <Button>Create Quiz</Button>
          <Button>Add Question</Button>
          <br />
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="dcs">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </form>
        {/* <Form>
          <Form.Select>
            <option>Select number of questions</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
        </Form> */}
      </div>
    </div>
  );
};

export { CreateQuiz };
