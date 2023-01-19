import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const New = ({navigation, route}) => {
  const item = route.params.new

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
      />
      <Image
        source={require("../../assets/News/EventsSpecific.png")} 
        style={styles.vector}
      />
        </View>
      <View style={styles.titleContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textTitle}>{item.text}</Text>

      </View>
    </ScrollView>

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
  },
  image: {
    width: '100%',
    height: 300,
  }
});

export default New;