import { ADD_USERS } from "../actions/users";
import { QUESTION_TO_USER, ADD_QUESTION_USER } from "../actions/users";
const users = (state = {}, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        ...action.users,
      };
    case QUESTION_TO_USER:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id],
        },
      };
    case ADD_QUESTION_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
};

export default users;
