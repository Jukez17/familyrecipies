import React from "react"
import Toast from "react-native-toast-message"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "../store/store"
import Navigation from "../navigation"
import { AuthProvider } from "../navigation/authProvider"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AuthProvider>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  )
}

export default App
