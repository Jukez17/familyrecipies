export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const authenticationAction = (trueFalse) => ({
  type: USER_LOGGED_IN,
  payload: trueFalse,
});