import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const New = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Present')}>
        <Text style={styles.buttonText}>&#x276C;</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  buttonBack: {
    marginLeft: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default New;