import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
  loading: false,
  error: null,
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
        quizes: action.payload,
      };
    },
    fetchQuizesError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { fetchQuizesStart, fetchQuizesSuccess, fetchQuizesError } =
  quizList.actions;
export default quizList.reducer;
