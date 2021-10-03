import React, { useContext, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Input } from "react-native-elements"
import Ionicons from "react-native-vector-icons/Ionicons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { firebase } from "../../../firebase/config"
import { AuthContext } from "../../../navigation/authProvider"
// import toasts
import {
  registerSuccToast,
  passErrorToast,
  userErrorToast,
} from "../../../components/toasts/index"
// colors
import colors from "../../../styles/colors"
import styles from "./styles"

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const { register } = useContext(AuthContext)
  const onLoginPress = () => {
    navigation.navigate("Login")
  }
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      passErrorToast()
      return
    }

    register(email, password)
  }
  const {
    container,
    input,
    button,
    buttonTitle,
    footerView,
    footerText,
    footerLink,
    inputGroup,
  } = styles
  return (
    <View style={container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%", marginTop: 20 }}
        keyboardShouldPersistTaps="always">
        <View style={inputGroup}>
          <Input
            inputContainerStyle={input}
            placeholder="E-mail"
            placeholderTextColor={colors.grey}
            leftIcon={<Ionicons name="md-mail" size={24} color="black" />}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Input
            inputContainerStyle={input}
            placeholder="Password"
            leftIcon={
              <Ionicons name="ios-lock-closed" size={24} color="black" />
            }
            rightIcon={
              <Ionicons
                onPress={() => setShowPass(showPass ? false : true)}
                name={showPass === false ? "md-eye-off" : "md-eye"}
                size={24}
                color="black"
              />
            }
            secureTextEntry={showPass ? false : true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Input
            inputContainerStyle={input}
            placeholder="Confirm Password"
            leftIcon={
              <Ionicons name="ios-lock-closed" size={24} color="black" />
            }
            rightIcon={
              <Ionicons
                onPress={() =>
                  setShowConfirmPass(showConfirmPass ? false : true)
                }
                name={showConfirmPass === false ? "md-eye-off" : "md-eye"}
                size={24}
                color="black"
              />
            }
            secureTextEntry={showConfirmPass ? false : true}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <TouchableOpacity style={button} onPress={() => onRegisterPress()}>
            <Text style={buttonTitle}>Create account</Text>
          </TouchableOpacity>
          <View style={footerView}>
            <Text style={footerText}>
              Already got an account?{" "}
              <Text onPress={onLoginPress} style={footerLink}>
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default RegisterScreen
