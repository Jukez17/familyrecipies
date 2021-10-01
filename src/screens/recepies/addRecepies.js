import React from "react"
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native"
import { Input } from "react-native-elements"
// colors
import colors from "../../styles/colors"

const width = Dimensions.get('screen').width

const AddRecipeScreen = () => {
  const {
    container,
    inputContainer,
    inputTimeContainer,
    inputStyle,
    inputGroup,
    addButton,
    buttonContainer,
    buttonLabel
  } = styles
  return (
    <View style={container}>
      <Input
        inputContainerStyle={inputContainer}
        placeholder="Name of the recipe"
        placeholderTextColor={colors.white}
      />
      <View style={inputGroup}>
        <Input
          inputContainerStyle={inputTimeContainer}
          inputStyle={inputStyle}
          placeholder="Cooking time"
          placeholderTextColor={colors.white}
        />
        <Input
          inputContainerStyle={inputTimeContainer}
          inputStyle={inputStyle}
          placeholder="Total time"
          placeholderTextColor={colors.white}
        />
      </View>
      <Pressable style={addButton}>
        <View style={buttonContainer}>
        <Text style={buttonLabel}>Add recipe</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignContent: "center",
  },
  inputContainer: {
    borderBottomColor: colors.black,
  },
  inputTimeContainer: {
    borderBottomColor: colors.black,
    width: "50%",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 105,
  },
  inputStyle: {
    width: 200,
  },
  addButton: {
    backgroundColor: colors.blue,
    width: width / 1.2,
    height: 50,
    alignSelf: 'center',
    borderRadius: 9
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddRecipeScreen
