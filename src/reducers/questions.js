import { ADD_QUESTIONS, HANDLE_ADD_QUESTIONS } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, ...action.questions };
    case HANDLE_ADD_QUESTIONS:
      const { Questions } = action;
      return {
        ...state,
        [Questions.id]: {
          ...Questions,
        },
      };

    default:
      return state;
  }
};
export default questions;
