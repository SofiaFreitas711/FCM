import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Editar Perfil</Text>
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

export default EditProfile;