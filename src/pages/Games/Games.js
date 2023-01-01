import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  Keyboard,
} from 'react-native';
import GamesItem from '../../components/GamesItem.js'
import FilterGames from '../../components/FilterGames.js'
import filterIcon from '../../assets/Games/filterIcon.png';

list = [
  {
    name: "Jogo 1",
    image: "https://t1.uc.ltmcdn.com/pt/posts/1/8/0/surrealismo_o_que_e_e_como_surgiu_20081_600.jpg",
    points: 100,
    type: "Quizz",
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
  const [filterActivated, setFilterActivated] = useState(false)

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

  const filterButton = () => {
    setFilterActivated(!filterActivated);
  }

  const changeFilterType = (newType) => {
    type = newType == "Todos" ? '' : newType;
    console.log(type); 
    setFilterType(type)

  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Text style={styles.title}>Jogos</Text>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder="Pesquisar Jogo"
          onChangeText={setFilterName}
          value={filterName}
        />
        <TouchableOpacity style={styles.filterButton} onPress={filterButton}>
        <Image 
          source={filterIcon}
          style={styles.image}
        />
        </TouchableOpacity>
      </View>
      <View>
        {
          filterActivated === true ?
            <FilterGames onFilterType={changeFilterType} type={filterType}/> 
            : ''
        }
      </View>
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
  filterContainer: {
    flexDirection: 'row',
  },
  textInput: {
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 43,
    width: "80%",
  },
  filterButton:{
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    transform: [{ rotate: '90deg' }],
  },
  image: {
    width: 35,
    height: 35,
  },
  listGames: {
    marginBottom: 110,
  }
});

export default Games;