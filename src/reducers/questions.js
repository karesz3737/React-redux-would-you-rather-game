import {
  ADD_QUESTIONS,
  HANDLE_ADD_QUESTIONS,
  ADD_QUESTION_TO_QUESTION,
} from "../actions/questions";

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
    case ADD_QUESTION_TO_QUESTION:
      const { qid, answer, authedUser } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

    default:
      return state;
  }
};
export default questions;
