import "./App.scss";
import React from "react";
import { Layout } from "./hoc/Layout/Layout";
import { Quiz } from "./pages/Quiz/Quiz";
import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Navigation/Drawer/Drawer";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Quiz />}></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
