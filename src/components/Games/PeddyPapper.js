import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PeddyPapper = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Peddy-Papper</Text>
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

export default PeddyPapper;