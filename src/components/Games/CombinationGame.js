import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CombinationGame = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Combination</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  }
});

export default CombinationGame;