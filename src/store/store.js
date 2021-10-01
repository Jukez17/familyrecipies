import { createStore, applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import { createLogger } from "redux-logger"
import AsyncStorage from "@react-native-async-storage/async-storage"

import rootReducer from "../reducers/index"
import { ModalReducer } from "../reducers/ModalReducer"
import headerSwitchToggleReducer from "../reducers/ToggleReducer"

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(createLogger()))

let persistor = persistStore(store)

export { store, persistor }
