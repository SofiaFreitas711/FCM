import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const New = ({ navigation, route }) => {
  const item = route.params.event

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{alignItems: 'center'}}>
      <Image
        source={require("../../assets/News/EventsSpecific.png")}
        style={styles.vector}
      />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.description}>{item.type}</Text>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>Data  <Text style={styles.date}>24-08-2002</Text></Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textTitle}>{item.info}</Text>
      </View>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  image: {
    width: 600,
    height: 300,
  },
  vector: {
    width: 500,
    bottom: 180,
    marginRight: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: -250,
    marginVertical: 10,
  },
  description: {
    color: '#54C5D0',    
    fontWeight: 'bold',  
  },
  title:{
    fontSize: 40,
    marginTop: -5,
    marginBottom: 1,
    color: '#161616',
    fontWeight: '600',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'justify',
  },
  date:{ 
    fontSize: 16,
    fontWeight: '100',
    color: 'black',
  }
});

export default New;