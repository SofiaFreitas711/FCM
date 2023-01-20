import React, { useState, useEffect } from 'react';
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

const Game = ({ navigation, route }) => {
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
    let token = await AsyncStorage.getItem('token')
    const game = await api.get(`/games/${gameInfo._id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    if (game.status == 200) {
      let id = await AsyncStorage.getItem('userID');
      let token = await AsyncStorage.getItem('token')
      const user = await api.get(`/users/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (user.status == 200) {
        const newLeaderboard = game.data.game.leaderbord
        newLeaderboard.push({
          name: user.data.user.name,
          points: points
        });

        await api.patch(`/games/${gameInfo._id}`,
          {
            leaderbord: newLeaderboard,
          }, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
      }

    }
  }

  const setPoints = async (points) => {
    let id = await AsyncStorage.getItem('userID');
    let token = await AsyncStorage.getItem('token')
    const user = await api.get(`/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    if (user.status == 200) {
      const newPoints = user.data.user.points + points
      await api.patch(`/users/${id}`,
        {
          points: newPoints,
        }, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
    }
  }

  const finalizeGame = async (rightQuestion) => {
    const questionPoint = gameInfo.points / gameInfo.questions.length
    const points = questionPoint * rightQuestion
    await setLeaderbord(points)
    await setPoints(points)
    navigation.navigate('Leaderboard', { game: gameInfo, points: points })
  }

  useEffect(() => {
    getGame(route.params.art)
  }, [])

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
          game.type === "Quizz" ? <GameQuizz finalizeQuizz={finalizeGame} game={gameInfo.questions} />
          : game.type === "Combinação" ? <GameCombination />
            : game.type === "Peddy-Papper" ? <PeddyPapper />
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