import "./App.scss";
import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div className="container">
      <Layout>
        <Quiz></Quiz>
      </Layout>
    </div>
  );
}
export default App;
