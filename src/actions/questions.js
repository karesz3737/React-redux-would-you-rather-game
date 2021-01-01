import sevePoll, { savePoll } from "../api";
import { questionToUser } from "../actions/users";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const HANDLE_ADD_QUESTIONS = "HANDLE_ADD_QUESTIONS";

export const addQuestions = (questions) => {
  return {
    type: ADD_QUESTIONS,
    questions,
  };
};

export const handleAddQuestions = (Questions) => {
  return {
    type: HANDLE_ADD_QUESTIONS,
    Questions,
  };
};

export const handleQuestions = (questionOne, questionTwo, authedUser) => {
  return function (dispatch) {
    return savePoll({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: authedUser,
    }).then((Questions) => {
      dispatch(handleAddQuestions(Questions));
      dispatch(questionToUser(Questions));
    });
  };
};
