import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Events = ({navigation}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Eventos</Text>
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

export default Events;