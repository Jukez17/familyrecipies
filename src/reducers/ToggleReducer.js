export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';

const initialState = {
 isActive: false,
};

const switchToggleReducer = (state = initialState, action) => {
switch (action.type) {
case TOGGLE_SWITCH:
 return {
   ...state,
   isActive: action.payload,
 };
default:
 return state;
 }
};
export default switchToggleReducer;