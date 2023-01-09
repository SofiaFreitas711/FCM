import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const GamesItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoGame}>
        <Text style={styles.gameName}>{props.game.name}</Text>
        <Text>{props.game.type}</Text>
      </View>
      <View style={styles.imgGame}>
        <Image 
          source={{ uri: props.game.image,}}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: "#54C5D0",
    borderRadius: 12,
    height: 145,
    width: "90%",
  },
  infoGame: {
    width: "50%",
    padding: 15,
  },
  imgGame: {
    width: "50%"
  },
  gameName: {
    fontSize: 18,
    fontWeight: "700",
    height: "65%",
    // marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  }
});

export default GamesItem;