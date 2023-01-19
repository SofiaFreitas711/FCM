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

// list = [
//   {
//     name: "Jogo 1",
//     image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
//     points: 100,
//     type: "Quizz",
    // questions: [
      // {
      //   question: "Pergunta 1",
      //   alternatives: ["alternativa a1", "alternativa a2", "alternativa a3", "alternativa a4"],
      //   image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
      //   answer: "alternativa a2"
      // },{
      //   question: "Pergunta 2",
      //   alternatives: ["alternativa b1", "alternativa b2", "alternativa b3", "alternativa b4"],
      //   answer: "alternativa b2"
      // },{
      //   question: "Pergunta 3",
      //   alternatives: ["alternativa c1", "alternativa c2", "alternativa c3", "alternativa c4"],
      //   answer: "alternativa c4"
      // },{
      //   question: "Pergunta 4",
      //   alternatives: ["alternativa d1", "alternativa d2", "alternativa d3", "alternativa d4"],
      //   image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
      //   answer: "alternativa d1"
      // }
    // ],
//     leaderbord: [{
//       name: "Carlos Queiros",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 100,
//     }, {
//       name: "Mario Oliveira",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 85,
//     }, {
//       name: "Antonio Monteiro",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 75,
//     }, {
//       name: "Pedro Miranda",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 60,
//     }, {
//       name: "Carolina Sousa",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 60,
//     }, {
//       name: "Tiago Rodrigues",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 55,
//     }, {
//       name: "Rita Pereira",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 50,
//     }, {
//       name: "Mario Soares",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 50,
//     }, {
//       name: "Carlos Melo",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 50,
//     }, {
//       name: "¯\_(ツ)_/¯",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 45,
//     }, {
//       name: "José Magalhães",
//       image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
//       points: 45,
//     },],
//     points: 100
//   },
//   {
//     name: "Jogo 2",
//     image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
//     points: 150,
//     type: "Combinação",
//   },
//   {
//     name: "Jogo 3",
//     image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
//     points: 200,
//     type: "Quizz",
//   },
//   {
//     name: "Jogo 4",
//     image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
//     points: 250,
//     type: "Combinação",
//   },
// ]

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