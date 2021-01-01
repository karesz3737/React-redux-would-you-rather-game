import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import questions from "./questions";
import users from "./users";
import authedUser from "./authUser";

export default combineReducers({
  users,
  questions,
  authedUser,
  LoadingBar: loadingBarReducer,
});
