import { addUsers } from "./users";
import { addQuestions } from "./questions";
import { getInitialData } from "../api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function handleAddData() {
  return (dispatch) => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(showLoading());
      dispatch(addUsers(users));
      dispatch(addQuestions(polls));
      dispatch(hideLoading());
    });
  }; // dispatching action creators
}

export default handleAddData;
