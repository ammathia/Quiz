import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "../quizSlice";

export default combineReducers({
  quiz: quizReducer,
});
