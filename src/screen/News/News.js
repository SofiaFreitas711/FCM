import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import NewsItem from '../../components/News/NewsItem.js';

list = [
  {
    name: "Teste 1",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  }, {
    name: "Teste 2",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  }, {
    name: "Teste 3",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  }, {
    name: "Teste 4",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  },
  {
    name: "Teste 5",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  }, {
    name: "Teste 6",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
  }, {
    name: "Teste 7",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  }, {
    name: "Teste 8",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },
  {
    name: "Teste 9",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  }, {
    name: "Teste 10",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  }
];

const News = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Present')}>
        <Text style={styles.buttonText}>&#x276C;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Notícias</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return (
            <Pressable style={styles.list} onPress={() => navigation.navigate('New', { new: item })}>
              <NewsItem news={item} />
            </Pressable>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  bg: {
    position: 'absolute',
    top: -20,
    left:-20,
  },
  buttonBack: {
    marginLeft: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    marginTop: 25,
    marginBottom: 5,
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    alignItems: "center",
    width: 366,
    marginTop: 20,
  }
});

export default News;