import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 // colors
 import colors from '../../styles/colors'
 
 const HomeScreen = () => {
   const { container } = styles
   return (
     <View style={container}>
       <Text>Hi</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignContent: 'center'
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default HomeScreen;
 