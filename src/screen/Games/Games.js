import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  Keyboard,
} from 'react-native';
import GamesItem from '../../components/Games/GamesItem.js';
import FilterGames from '../../components/Games/FilterGames.js';


list = [
  {
    name: "Jogo 1",
    image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
    points: 100,
    type: "Quizz",
    questions: [
      {
        question: "Pergunta 1",
        alternatives: ["alternativa a1", "alternativa a2", "alternativa a3", "alternativa a4"],
        answer: "alternativa a2"
      },{
        question: "Pergunta 2",
        alternatives: ["alternativa b1", "alternativa b2", "alternativa b3", "alternativa b4"],
        answer: "alternativa b2"
      },
    ]
  },
  {
    name: "Jogo 2",
    image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
    points: 150,
    type: "Combinação",
  },
  {
    name: "Jogo 3",
    image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
    points: 200,
    type: "Quizz",
  },
  {
    name: "Jogo 4",
    image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
    points: 250,
    type: "Combinação",
  },
]

const Games = ({navigation}) => {
  const [filterName, setFilterName] = useState('')
  const [filterType, setFilterType] = useState('')

  const listGames = () => {
    if (filterName !== '' && filterType !== '') {
      const games = list.filter(game => game.name.includes(filterName) && game.type == filterType);

      return games;
    } else if (filterName !== '') {
      const games = list.filter(game => game.name.includes(filterName));

      return games;
    } else if (filterType !== '') {
      const games = list.filter(game => game.type == filterType);

      return games;
    } else {
      return list;
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
      <Text style={styles.title}>Jogos</Text>
      <FilterGames onFilterText={changeFilterText} onFilterType={changeFilterType} item={{type:{filterType}, name:{filterName}}}/> 
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listGames}
          data={listGames()}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => navigation.navigate('Game', {game: item})}>
                <GamesItem game={item}/>
              </Pressable>
            )
          }}
        />
      </Pressable>
  )
}

const styles = StyleSheet.create({
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