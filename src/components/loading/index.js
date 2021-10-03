import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
// colors
import colors from '../../styles/colors'

const Loading = ()  => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={colors.blue} />
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loading