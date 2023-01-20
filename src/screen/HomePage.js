import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SvgUri } from 'react-native-svg';
import api from "./../api/index.js";

import ArtOfTheDay from '../components/ArtOfTheDay.js';
import NewsItem from '../components/News/NewsItem.js';
import EventsItem from '../components/News/EventsItem.js';
import IconMenu from 'react-native-vector-icons/Feather'


list = [
  {
    name: "Teste 6",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    artist: "blablabla",
    type: "Obra de arte",
  }
];

const HomePage = ({ navigation }) => {
  const [listNews, setListNews] = useState([]);
  const [listEvents, setListEvents] = useState([]);

  const getArt = () => {
    return list.filter(n => n.type === "Obra de arte");
  }

  const getNews = async () => {
    const response = await api.get('/news/type/Noticia');
    if (response.status === 200) {
      console.log(response.data.news);
      setListNews(response.data.news);
    }
  }

  const getEvents = async () => {
    const response = await api.get('/news/type/Evento');
    if (response.status === 200) {
      setListEvents(response.data.news);
    }
  }

  useEffect(() => {
    getEvents();
    getNews();
  }, [])

  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Images/FCM/fundo.svg" style={styles.bg}/>
      <Pressable onPress={() => navigation.navigate('Menu')}>
        <IconMenu name="menu" color="#000" size={25} style={{margin: 15}}/>
      </Pressable>
      <ScrollView>
        <View>
        <FlatList
            horizontal={true}
            data={getArt()}
            renderItem={({item}) => {
              return (
                <Pressable onPress={() => navigation.navigate('Obra', {art: item})}>
                  <ArtOfTheDay news={item} />
                </Pressable>
              )
            }}
          />
        </View>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.secondTitles}>Notícias mais recentes</Text>
            <TouchableOpacity style={styles.linksButton} onPress={() => navigation.navigate('News')}>
              <Text style={styles.linksOne}>Todas <Icon name="right"/></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={listNews.slice(0, 5)}
            renderItem={({item}) => {
              return (
                <Pressable onPress={() => navigation.navigate('News', {new: item}, console.log(item))}>
                  <NewsItem news={item} />
                </Pressable>
              )
            }}
          />
        </View>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.secondTitles}>Eventos mais recentes</Text>
            <TouchableOpacity style={styles.linksButton} onPress={() => navigation.navigate('Events')}>
              <Text style={styles.linksTwo}>Todas <Icon name="right"/></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={listEvents.slice(0, 5)}
            renderItem={({item}) => {
              return (
                <Pressable onPress={() => navigation.navigate('Events', {event: item})}>
                  <EventsItem event={item} />
                </Pressable>
              )
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  bg: {
    position: 'absolute',
    top:-60,
    left:-20,
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
  secondTitles: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    width: "66%",
    marginLeft: 10,
  },
  linksButton: {
    marginLeft: 50,
  },
  linksOne: {
    color: "#417BB1",
    fontSize: 15,
    fontWeight: "600",
  },
  linksTwo: {
    color: "#54C5D0",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default HomePage;