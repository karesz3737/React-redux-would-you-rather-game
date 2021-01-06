export const ADD_USERS = "ADD_USERS";
export const QUESTION_TO_USER = "QUESTIONS_TO_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users,
  };
};

export const questionToUser = ({ id, author }) => {
  return {
    type: QUESTION_TO_USER,
    id,
    author,
  };
};

export const addQuestionToUser = ({ qid, option }) => {
  return {
    type: ADD_QUESTION_USER,
    qid,
    option,
  };
};
