import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { Input } from "react-native-elements"
// colors
import colors from "../../styles/colors"

const AddRecipeScreen = () => {
  const { container, inputContainer, inputStyle } = styles
  return (
    <View style={container}>
      <Input inputContainerStyle={inputContainer} inputStyle={inputStyle} placeholder="Name of the recipe" placeholderTextColor={colors.white} />
      <Pressable>
        <Text>Add recipe</Text>
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
    borderBottomColor: colors.black
  },
  inputStyle: {

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
})

export default AddRecipeScreen
