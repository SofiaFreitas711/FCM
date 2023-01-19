import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  Keyboard,
} from 'react-native';
import GamesItem from '../../components/Games/GamesItem.js';
import FilterGames from '../../components/Games/FilterGames.js';
import { SvgUri } from 'react-native-svg';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Games = ({ navigation }) => {
  const [filterName, setFilterName] = useState('')
  const [filterType, setFilterType] = useState('')
  const [listGames, setListGames] = useState([])

  const getGames = async () => {
    const response = await api.get('/games', {
      headers: {
        'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      setListGames(response.data.msg);
    }
  }

  const listGamesFunction = () => {
    getGames()
    if (filterName !== '' && filterType !== '') {
      const games = listGames.filter(game => game.name.includes(filterName) && game.type == filterType);

      return games;
    } else if (filterName !== '') {
      const games = listGames.filter(game => game.name.includes(filterName));

      return games;
    } else if (filterType !== '') {
      const games = listGames.filter(game => game.type == filterType);

      return games;
    } else {
      return listGames;
    }
  }

  const changeFilterText = (Text) => {
    setFilterName(Text)
  }

  const changeFilterType = (newType) => {
    type = newType == "Todos" ? '' : newType;
    setFilterType(type)
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg} />
      <Text style={styles.title}>Jogos</Text>
      <FilterGames onFilterText={changeFilterText} onFilterType={changeFilterType} item={{ type: { filterType }, name: { filterName } }} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listGames}
        data={listGamesFunction()}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate('Game', { game: item })}>
              <GamesItem game={item} />
            </Pressable>
          )
        }}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: -40,
    left: -25,
  },
  container: {
    margin: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  listGames: {
    marginBottom: 110,
  },
});

export default Games;