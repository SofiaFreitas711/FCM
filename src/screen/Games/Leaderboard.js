import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Leaderboard = ({ navigation, route }) => {
  const [leaderboard, setLeaderboard] = useState([])
  const game = route.params.game
  const points = route.params.points

  const getGame = async () => {
    const response = await api.get(`/games/${game._id}`, {
      headers: {
        'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      const order = response.data.game.leaderbord.slice(0).sort(sortRank)
      setLeaderboard(order);
    }
  }

  const sortRank = (pointsA, pointsB) => {
    if (pointsA.points < pointsB.points) return 1;
    else if (pointsA.points > pointsB.points) return -1;
    else return 0;
  };

  // const getUserName = async (userID) => {
  //   let token = await AsyncStorage.getItem('token')
  //   const user = await api.get(`/users/${userID}`, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //   if (user.status === 200) {
  //     console.log(user.data.user.name);
  //     return user.data.user.name
  //   }
  // }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <View>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <TouchableOpacity style={styles.backGames} onPress={() => navigation.navigate('Games')}>
        <SvgUri uri="https://phyrowns.sirv.com/Surrealismo/BackGames.svg" style={styles.backGamesIcon}/>
        <Text style={styles.backGamesText}>Votlar para os jogos</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.gameName}>{game.name}</Text>
        <Text style={styles.title}>RESULTADOS</Text>
        <Text style={styles.resultGame}>Conseguiste <Text style={styles.resultGameBold}>{points}/{game.points}</Text> pontos</Text>
      </View>
      <SvgUri uri="https://phyrowns.sirv.com/Surrealismo/LeaderBordBG.svg" style={styles.bgLeaderBord}/>
      <View style={styles.leaderbord}>
        {
          leaderboard.length > 1 &&
          <View style={[styles.leaders, styles.position2]}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
            style={styles.imagePosition2}
          />
          <Text style={styles.name}>2º - {leaderboard[1].name}</Text>
          <Text style={styles.points}>{leaderboard[1].points}</Text>
        </View>
        }
        {
          leaderboard.length > 0 &&
          <View style={[styles.leaders]}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
            style={styles.imagePosition1}
          />
          <Text style={styles.name}>1º - {leaderboard[0].name}</Text>
          <Text style={styles.points}>{leaderboard[0].points}</Text>
        </View>
        }
        {
          leaderboard.length > 2 &&
          <View style={[styles.leaders, styles.position3]}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
            style={styles.imagePosition3}
          />
          <Text style={styles.name}>3º - {leaderboard[2].name}</Text>
          <Text style={styles.points}>{leaderboard[2].points}</Text>
        </View>
        }
      </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listPlayersBackground}
          data={leaderboard.slice(3, 10)}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.listPlayers}>
                <View style={styles.listContainer}>
                  <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" }}
                    style={styles.listPlayersImage}
                  />
                </View>
                <View style={styles.listContainerCenter}>
                  <Text style={styles.listPlayersName}>{index+4}º - {item.name}</Text>
                </View>
                <View style={styles.listContainer}>
                  <Text style={styles.listPlayersPoints}>{item.points}pts</Text>
                </View>
              </View>
            )
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top:-40,
    left: -25,
  },
  bgLeaderBord: {
    width: "100%",
    position: 'absolute',
    top: 217,
    left: -20,
  },
  backGames: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  backGamesText: {
    marginHorizontal: 10,
    color: "black",
    fontSize: 10,
  },
  header: {
    alignItems: "center",
    marginTop: "6%"
  },
  gameName: {
    fontSize: 13,
    color: 'black',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  resultGame: {
    color: 'black',
    fontSize: 14,
    marginVertical: 10,
  },
  resultGameBold: {
    fontWeight: 'bold',
  },
  leaderbord: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaders: {
    width: "25%",
    marginLeft: 18,
  },
  position2: {
    marginTop: 15,
  },
  imagePosition2: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  imagePosition1: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  position3: {
    marginTop: 27,
  },
  imagePosition3: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 10,
  },
  points: {
    color: "black",
  },
  listPlayersBackground: {
    width: "100%",

    paddingTop: 10,
  },
  listPlayers: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  listContainer: {
    width: "30%",
    alignItems: "center",
  },
  listContainerCenter: {
    width: "40%",
    alignItems: "center",
  },
  listPlayersImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "white"
  },
  listPlayersName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listPlayersPoints: {
    fontSize: 14,
    fontWeight: "medium",
  },
});

export default Leaderboard;