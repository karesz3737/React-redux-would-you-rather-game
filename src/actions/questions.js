import { savePoll } from "../api";
import { questionToUser } from "../actions/users";
import { saveQuestionAnswer } from "../api";
import { addQuestionToUser } from "../actions/users";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const HANDLE_ADD_QUESTIONS = "HANDLE_ADD_QUESTIONS";
export const ADD_QUESTION_TO_QUESTION = "ADD_QUESTION_TO_QUESTION";

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

export const addQuestionToQuestion = ({ authedUser, qid, answer }) => {
  return {
    type: ADD_QUESTION_TO_QUESTION,
    qid,
    answer,
    authedUser,
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

export const handleQuestionToQuestion = (qid, answer) => {
  return function (dispatch, getState) {
    const { authedUser } = getState();
    return saveQuestionAnswer({ qid, answer, authedUser }).then(() => {
      dispatch(addQuestionToQuestion({ authedUser, qid, answer }));
      dispatch(addQuestionToUser({ authedUser, qid, answer }));
    });
  };
};
