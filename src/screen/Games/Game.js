import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameQuizz from "../../components/Games/QuizzGame.js";
import GameCombination from "../../components/Games/CombinationGame.js";
import PeddyPapper from "../../components/Games/PeddyPapper.js";

const Game = ({navigation, route}) => {
  const [gameInfo, setgameInfo] = useState(null);
  const game = route.params.game;

  const getGame = async () => {
    const response = await api.get(`/games/${game._id}`, {
      headers: {
        'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      setgameInfo(response.data.game);
    }
  }

  const setLeaderbord = async (points) => {
    const response = await api.patch(`/games/${game._id}`, 
    {
      leadebord: {
        userID: AsyncStorage.getItem('userID'),
        points: points
      }
    },{
      headers: {
        'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      setgameInfo(response.data.game);
    }
  }
  
  const finalizeGame = async (rightQuestion) => {
    const questionPoint = gameInfo.points / gameInfo.questions.length 
    const points = questionPoint * rightQuestion
    // await setLeaderbord(points)
    navigation.navigate('Leaderbord', {game: gameInfo, points: points})
  }

  useEffect(()=>{
    getGame(route.params.art)
  })

  return (
    <View style={styles.container}>
        <View style={styles.buttonBackContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Games')}>
            <Text style={styles.buttonText}>&#x276C;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{game.name}</Text>
        </View>
      { 
        gameInfo &&
        game.type === "Quizz" ? <GameQuizz finalizeQuizz={finalizeGame} game={gameInfo.questions}/>
        : game.type === "Combinação" ? <GameCombination/>
        : game.type === "Peddy-Papper" ? <PeddyPapper/> 
        : <View style={styles.loadingContainer}>
           <Text style={styles.loading}>A carregar...</Text>
         </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  buttonBackContainer: {
    margin: 15,
    marginLeft: 25,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 28,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: "25%"
  },
  loading: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Game;