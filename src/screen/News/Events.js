import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import EventsItem from '../../components/News/EventsItem.js';
import api from "../../api/index.js";

const Events = ({ navigation }) => {
  const [listEvents, setListEvents] = useState([]);

  const getEvents = async () => {
    const response = await api.get('/news')
    if (response.status === 200) {
      setListEvents(response.data.news.filter(event => event.type === "Evento"));
    }
  }

  useEffect(() => {
    getEvents()
  }, [])
  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Present')}>
        <Text style={styles.buttonText}>&#x276C;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Eventos</Text>
      <FlatList
        data={listEvents}
        renderItem={({ item }) => {
          return (
            <Pressable style={styles.list} onPress={() => navigation.navigate('Event', { event: item })}>
              <EventsItem event={item} />
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

export default Events;