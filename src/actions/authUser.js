export const AUTH_USER = "AUTH_USER";
export const RESET_AUTHED_USER = "RESET_AUTHED_USER";

export const addAuthUser = (id) => {
  return {
    type: AUTH_USER,
    id,
  };
};

export const resetAuthUser = () => {
  return {
    type: RESET_AUTHED_USER,
  };
};
