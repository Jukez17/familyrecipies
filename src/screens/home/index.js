import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { Card } from "react-native-elements"
import { firebase } from "../../firebase/config"
// colors
import colors from "../../styles/colors"

const HomeScreen = () => {
  const [recepies, setRecepies] = useState([])
  const [preptime, setPreptime] = useState(10)
  const [cookingtime, setCookingtime] = useState(30)

  const mins = preptime + cookingtime
  console.log(mins)
  const totalTime = () => {

    let hours = Math.floor(mins / 60)
    let minutes = mins % 60
    minutes = minutes < 10 ? '0' + minutes : minutes
    return `${hours ? `${hours}hrs:` : ''}${minutes}mins`
  } 

  const getRecepies = () => {
    const uid = firebase.auth().currentUser.uid
    firebase
      .database()
      .ref(`Users/${uid}/recepies/`)
      .on("value", (snapshot) => {
        const results = []
        snapshot.forEach((child) => {
          results.push({
            id: child.key,
            recipe: child.val().recipe,
            course: child.val().course,
            preptime: child.val().preptime,
            cookingtime: child.val().cookingtime,
            servings: child.val().servings
          })

        })
        setRecepies(results)
      })
  }

  console.log("recepies: ", recepies)

  useEffect(() => {
    getRecepies()
  }, [])

  const { container } = styles
  return (
    <View style={container}>
      <FlatList
        data={recepies}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <Card key={item.id}>
            <Card.Title key={item.recipe}>
              {item.recipe}
            </Card.Title>
            <Text key={item.course} style={{ color: colors.white , marginBottom: 10 }}>{item.course}</Text>
            <Text key={item.preptime} style={{ marginBottom: 10 }}>{item.preptime}</Text>
            <Text key={item.cookingtime} style={{ marginBottom: 10 }}>{item.cookingtime}</Text>
            <Text>{totalTime()}</Text>
          </Card>
          )
        }}
      />
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

export default HomeScreen
