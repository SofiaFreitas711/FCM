import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

const Leaderbord = ({ navigation, route }) => {
  const game = route.params.game
  const result = route.params.result
  const points = route.params.points

  console.log('Teste');
  console.log(game.leaderbord[0]);

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
        <View style={[styles.leaders, styles.position2]}>
          <Image
            source={{ uri: game.leaderbord[1].image }}
            style={styles.imagePosition2}
          />
          <Text style={styles.name}>2º - {game.leaderbord[1].name}</Text>
          <Text style={styles.points}>{game.leaderbord[1].points}</Text>
        </View>
        <View style={[styles.leaders]}>
          <Image
            source={{ uri: game.leaderbord[0].image }}
            style={styles.imagePosition1}
          />
          <Text style={styles.name}>1º -{game.leaderbord[0].name}</Text>
          <Text style={styles.points}>{game.leaderbord[0].points}</Text>
        </View>
        <View style={[styles.leaders, styles.position3]}>
          <Image
            source={{ uri: game.leaderbord[2].image }}
            style={styles.imagePosition3}
          />
          <Text style={styles.name}>3º -{game.leaderbord[2].name}</Text>
          <Text style={styles.points}>{game.leaderbord[2].points}</Text>
        </View>
      </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.listPlayersBackground}
          data={game.leaderbord.slice(3, 10)}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.listPlayers}>
                <View style={styles.listContainer}>
                  <Image
                    source={{ uri: item.image }}
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
  },
  leaders: {
    marginHorizontal: 5,
    alignItems: 'center',
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
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 10,
  },
  points: {
    color: "white",
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

export default Leaderbord;