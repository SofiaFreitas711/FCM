import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SvgUri } from 'react-native-svg';
import NewsItem from '../../components/News/NewsItem.js';
import EventsItem from '../../components/News/EventsItem.js';

list = [
  {
    name: "Teste 1",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 2",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },{
    name: "Teste 3",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 4",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },
  {
    name: "Teste 5",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 6",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },{
    name: "Teste 7",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
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
  },{
    name: "Teste 10",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },{
    name: "Teste 11",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 12",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },
  {
    name: "Teste 13",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 14",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },{
    name: "Teste 15",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },{
    name: "Teste 16",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
  },
];

const Present = ({ navigation }) => {
  const getNews = () => {
    return list.filter(n => n.type === "Noticia");
  }

  const getEvents = () => {
    return list.filter(n => n.type === "Evento");
  }

  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Atualidade</Text>
      <View>
        {/* Noticia em destaque */}
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.secundTitles}>Notícias mais recentes</Text>
          <TouchableOpacity style={styles.linksButton}>
            <Text style={styles.links}>Todas <Icon name="right"/></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={getNews()}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => navigation.navigate('New', {new: item})}>
                <NewsItem news={item} />
              </Pressable>
            )
          }}
        />
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.secundTitles}>Eventos mais recentes</Text>
          <TouchableOpacity style={styles.linksButton}>
            <Text style={styles.links}>Todas <Icon name="right"/></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={getEvents()}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => navigation.navigate('Event', {event: item})}>
                <EventsItem event={item} />
              </Pressable>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  bg: {
    position: 'absolute',
    top:-40,
    left:-20,
  },
  menuIcon: {
    marginVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  secundTitles: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    width: "66%"
  },
  linksButton: {
    marginLeft: 65,
  },
  links: {
    color: "#417BB1",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Present;