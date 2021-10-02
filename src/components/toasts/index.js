import Toast from "react-native-toast-message"

// Authentication toasts
export const loginSuccToast = () => {
  Toast.show({
    type: "success",
    position: "bottom",
    text1: "Login succesfull",
    text2: "Directing you to home screen now",
  })
}

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

  // Recipe toasts
  export const addRecipeToast = () => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Success",
      text2: "Your recipe was added succesfully"
    })
  }

  export const addRecipeErrorToast = () => {
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Something went wrong",
      text2: "Something went wrong while adding your recipe"
    })
  }