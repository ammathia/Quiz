import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  isFinished: false,
  activeNumber: 0,
  results: {},
  answerState: null,
  quiz: null,
};

const quizList = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuizesStart(state) {
      return {
        ...state,
        loading: true,
      };
    },
    fetchQuizesSuccess(state, action) {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    },
    fetchQuizesError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchQuizStart(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    fetchQuizSuccess(state, action) {
      return {
        ...state,
        loading: false,
        quiz: action.payload,
      };
    },
    fetchQuizError(state, action) {
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    },
    setState(state, action) {
      return {
        ...action.payload,
      };
    },
    setResults(state, action) {
      console.log(action.payload);
      return {
        ...state,
        results: action.payload,
      };
    },
  },
});

export const {
  fetchQuizesStart,
  fetchQuizesSuccess,
  fetchQuizesError,
  fetchQuizStart,
  fetchQuizSuccess,
  fetchQuizError,
  setState,
  setResults,
} = quizList.actions;
export default quizList.reducer;
