import { AUTH_USER, RESET_AUTHED_USER } from "../actions/authUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.id;
    case RESET_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
