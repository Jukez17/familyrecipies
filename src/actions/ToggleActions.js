export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';

export const switchToggleAction = (trueFalse) => ({
  type: TOGGLE_SWITCH,
  payload: trueFalse,
});