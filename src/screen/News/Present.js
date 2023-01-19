import React, { useState, useEffect } from 'react';
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

import api from "../../api/index.js";

const Present = ({ navigation }) => {
  const [listNews, setListNews] = useState([]);
  const [listEvents, setListEvents] = useState([]);

  const getNews = async () => {
    const response = await api.get('/news/type/Noticia');
    if (response.status === 200) {
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
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Atualidade</Text>
      <View>
        {/* Noticia em destaque */}
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.secundTitles}>Notícias mais recentes</Text>
          <TouchableOpacity style={styles.linksButton} onPress={() => navigation.navigate('News')}>
            <Text style={styles.links}>Todas <Icon name="right"/></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={listNews}
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
          <TouchableOpacity style={styles.linksButton} onPress={() => navigation.navigate('Events')}>
            <Text style={styles.links}>Todas <Icon name="right"/></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={listEvents}
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
    top:-75,
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