import { bindActionCreators } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { firebase } from "../../../firebase/config"
import { connect } from "react-redux"
// actions
import * as authenticationAction from "../../../actions/AuthActions"
// import toasts
import {
  loginSuccToast,
  passErrorToast,
  userErrorToast,
} from "../../../components/toasts/index"
import styles from "./styles"

const LoginScreen = (props) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onRegisterPress = () => {
    navigation.navigate("Register")
  }

  const onLoginPress = () => {
    if (!password) {
      passErrorToast()
      return
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        loginSuccToast()
      })
      .then(() => navigation.navigate("Main"))
      .then(() => {
        props.authenticationActions.authenticationAction(true)
      })
      .catch((error) => {
        userErrorToast()
      })
  }
  const {
    container,
    input,
    button,
    buttonTitle,
    footerView,
    footerText,
    footerLink,
  } = styles
  return (
    <View style={container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={button} onPress={() => onLoginPress()}>
          <Text style={buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={footerView}>
          <Text style={footerText}>
            Don't have an account?{" "}
            <Text onPress={onRegisterPress} style={footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

const mapStateToProps = (state) => ({
  signedIn: state.authReducer.signedIn,
})

const mapDispatchToProps = (dispatch) => ({
  authenticationActions: bindActionCreators(authenticationAction, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
