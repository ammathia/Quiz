import "./App.scss";
import React from "react";
import { Layout } from "./hoc/Layout/Layout";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizMath } from "./pages/QuizMath/QuizMath";
import { Routes, Route, Link } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { QuizList } from "./pages/QuizList/QuizList";
import { CreateQuiz } from "./pages/CreateQuiz/CreateQuiz";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="container">
      bbb
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Quiz />}></Route>
          <Route path="/QuizMath" element={<QuizMath />}></Route>
          <Route path="/QuizList" element={<QuizList />}></Route>
          <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
