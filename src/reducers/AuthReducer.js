export const USER_LOGGED_IN = 'USER_LOGGED_IN';

const initialState = {
 signedIn: false,
};

const authenticationReducer = (state = initialState, action) => {
switch (action.type) {
case USER_LOGGED_IN:
 return {
   ...state,
   signedIn: action.payload,
 };
default:
 return state;
 }
};
export default authenticationReducer;