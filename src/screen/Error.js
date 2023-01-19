import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SvgUri } from 'react-native-svg';

const Error = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg"
        style={styles.background}
      />
      <View>
        <View style={styles.imageContainer}>
          <SvgUri uri="https://atuousti.sirv.com/FCM/Error404.svg"
            style={styles.Image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.h1}> Nada para ver aqui </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    top: -70,
    left: -20,
  },
  imageContainer: {
    marginBottom: 40,
  },
  Image: {
    width: 279,
    height: 390,
  },
  textContainer: {
  },
  h1: {
    display: 'flex',
    textAlign: 'center',
    color: '#467B81',
    fontWeight: '400',
    fontSize: 24,
  },


});

export default Error;
