import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const EventItem = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.event.image }}
        style={styles.image}
      />
      <View style={styles.texts}>
        <Text style={styles.description}>{props.event.description}</Text>
        <Text style={styles.title}>{props.event.name}</Text>
      </View>
      <Image
        source={require("../../assets/News/Events.png")} 
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
    width: 240,
    height: 240,
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
    marginVertical: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 4,
  },
  vector: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
});

export default EventItem;