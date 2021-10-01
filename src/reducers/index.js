import { combineReducers } from "redux"

import { ModalReducer } from "./ModalReducer"
import switchToggleReducer from "./ToggleReducer"
import authenticationReducer from './AuthReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  modalReducer: ModalReducer,
  switchReducer: switchToggleReducer,
  authReducer: authenticationReducer
})

// Exports
export default rootReducer
