import React, { useState } from "react"
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native"
import { Input } from "react-native-elements"
import Ionicons from "react-native-vector-icons/Ionicons"
import { firebase } from "../../firebase/config"
// Toasts
import { addRecipeToast, addRecipeErrorToast } from '../../components/toasts'
// colors
import colors from "../../styles/colors"

const width = Dimensions.get("screen").width

const AddRecipeScreen = () => {
  const [recipe, setRecipe] = useState('')
  const [course, setCourse] = useState('')
  const [preptime, setPreptime] = useState('')
  const [cookingtime, setCookingtime] = useState('')
  const [servings, setServings] = useState('')
  const [ingredients, setIngredients] = useState([])

  const addRecipe = () => {
    const uid = firebase.auth().currentUser.uid
    firebase
    .database()
    .ref(`Users/${uid}/recepies/`)
    .push({
      recipe: recipe,
      course: course,
      preptime: preptime,
      cookingtime: cookingtime,
      servings: servings
    })
    .then(() => {
      addRecipeToast()
      setRecipe('')
      setCourse('')
      setPreptime('')
      setCookingtime('')
      setServings('')
    })
    .catch((error) => {
      addRecipeErrorToast()
    })
  } 

  const {
    container,
    addRecipeForm,
    inputContainer,
    inputTimeContainer,
    inputIngredientContainer,
    inputStyle,
    inputGroup,
    inputAddGroup,
    addButton,
    buttonContainer,
    buttonLabel,
    addIcon,
  } = styles
  return (
    <View style={container}>
      <View style={addRecipeForm}>
      <Input
        inputContainerStyle={inputContainer}
        placeholder="Name of the recipe"
        placeholderTextColor={colors.white}
        onChangeText={(text) => setRecipe(text)}
        value={recipe}
      />
      <Input
        inputContainerStyle={inputContainer}
        placeholder="Course"
        placeholderTextColor={colors.white}
        onChangeText={(text) => setCourse(text)}
        value={course}
      />
      <View style={inputGroup}>
        <Input
          inputContainerStyle={inputTimeContainer}
          inputStyle={inputStyle}
          placeholder="Preparation time"
          placeholderTextColor={colors.white}
          onChangeText={(text) => setPreptime(text)}
          onChange={(value) => setPreptime(value)}
          value={preptime}
        />
        <Input
          inputContainerStyle={inputTimeContainer}
          inputStyle={inputStyle}
          placeholder="Cooking time"
          placeholderTextColor={colors.white}
          onChangeText={(text) => setCookingtime(text)}
          value={cookingtime}
        />
      </View>
      <Input
        inputContainerStyle={inputContainer}
        placeholder="Servings"
        placeholderTextColor={colors.white}
        onChangeText={(text) => setServings(text)}
        value={servings}
      />
      <View style={inputAddGroup}>
        <Input
          inputContainerStyle={inputIngredientContainer}
          inputStyle={inputStyle}
          placeholder="Ingredient"
          placeholderTextColor={colors.white}
          onChangeText={(text) => setIngredients(text)}
        />
        <Pressable onPress={() => {}}>
          <Ionicons style={addIcon} name="ios-add-circle-outline" size={50} />
        </Pressable>
      </View>
      <Pressable style={addButton} onPress={() => addRecipe()}>
        <View style={buttonContainer}>
          <Text style={buttonLabel}>Add recipe</Text>
        </View>
      </Pressable>
      </View>
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
  addRecipeForm: {
    marginTop: - 150
  },
  inputContainer: {
    borderBottomColor: colors.black,
  },
  inputTimeContainer: {
    borderBottomColor: colors.black,
    width: "50%",
  },
  inputIngredientContainer: {

    borderBottomColor: colors.black,
    width: "85%",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 105,
  },
  inputAddGroup: {
    
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 35,
  },
  inputStyle: {
    width: 200,
  },
  addButton: {
    backgroundColor: colors.blue,
    width: width / 1.2,
    height: 50,
    alignSelf: "center",
    borderRadius: 9,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
  },
  addIcon: {
    color: colors.white,
    marginRight: 50,
  },
})

export default AddRecipeScreen
