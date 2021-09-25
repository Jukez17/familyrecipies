import React, { useState } from "react"
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Input } from "react-native-elements"
import Ionicons from "react-native-vector-icons/Ionicons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { firebase } from "../../../firebase/config"
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
  const onLoginPress = () => {
    navigation.navigate("Login")
  }
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      passErrorToast()
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        registerSuccToast()
        const uid = firebase.auth().currentUser.uid
        firebase
          .database()
          .ref(`Users/${uid}`)
          .set({
            email: email,
          })
          .then(() => navigation.navigate("Login"))
          .catch((error) => {
            userErrorToast()
          })
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
        {/*         <TextInput
          style={input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        /> */}
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
          leftIcon={<Ionicons name="md-mail" size={24} color="black" />}
          rightIcon={
              <Ionicons onPress={() => setShowPass(showPass ? false : true)} name={showPass === false ? "md-eye-off" : "md-eye"} size={24} color="black" />
          }
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Input
          inputContainerStyle={input}
          placeholder="Confirm Password"
          leftIcon={<Ionicons name="md-mail" size={24} color="black" />}
          rightIcon={<Ionicons onPress={() => setShowConfirmPass(showConfirmPass ? false : true)} name={showConfirmPass === false ? "md-eye-off" : "md-eye"} size={24} color="black" />}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        {/*         <TextInput
          style={input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        /> */}
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
      </KeyboardAwareScrollView>
    </View>
  )
}

export default RegisterScreen
