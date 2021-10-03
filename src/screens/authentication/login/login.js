import React, { useContext, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { AuthContext } from "../../../navigation/authProvider"
import styles from "./styles"
import { colors } from "react-native-elements"

const LoginScreen = (props) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useContext(AuthContext)

  const onRegisterPress = () => {
    navigation.navigate("Register")
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
          placeholderTextColor={colors.black}
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={input}
          placeholderTextColor={colors.black}
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={button} onPress={() => login(email, password)}>
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

export default LoginScreen
