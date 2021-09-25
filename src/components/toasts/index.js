import Toast from "react-native-toast-message"

export const registerSuccToast = () => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Registration succesfull",
      text2: "Directing you to home screen now",
    })
  }
  
  export const passErrorToast = () => {
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Username already exists",
      text2: "Try using different username",
    })
  }

  export const userErrorToast = () => {
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Passwords not matching",
      text2: "Try checking your passwords",
    })
  }