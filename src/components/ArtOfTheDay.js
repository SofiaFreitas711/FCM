import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const ArtOfTheDay = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.news.image }}
        style={styles.image}
      />
      <View style={styles.texts}>
        <Text style={styles.description}>OBRA DO DIA</Text>
        <Text style={styles.title}>{props.news.name}</Text>
        <Text style={styles.artist}>{props.news.artist}</Text>
      </View>
      <Image
        source={require("../assets/ArtOfTheDay/ArtOfTheDay.png")} 
        style={styles.vector}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 10,
    borderRadius: 15,
    width: 340,
    height: 292,
  },
  image: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  texts: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    zIndex: 1,
  },
  description: {
    fontSize: 11,
    color: 'white',
    marginVertical: 0,
    textAlign: 'right',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 2,
    textAlign: 'right',
  },
  artist: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 4,
    textAlign: 'right',
  },
  vector: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
});

export default ArtOfTheDay;