import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import GameQuizz from "../../components/Games/QuizzGame.js";
import GameCombination from "../../components/Games/CombinationGame.js";
import PeddyPapper from "../../components/Games/PeddyPapper.js";

const Game = ({navigation, route}) => {
  const [right, setRight] = useState(0);
  const [points, setPoints] = useState(0);
  const game = route.params.game;

  const finalizeGame = (rightQuestion) => {
    const questionPoint = game.points / game.questions.length 
    const newPoint = questionPoint * rightQuestion
    setRight(rightQuestion);
    setPoints(newPoint)
    alert(`Acertou ${rightQuestion} perguntas!! Tives-te ${newPoint} pontos!`);
  }

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
        game.type === "Quizz" ? <GameQuizz finalizeQuizz={finalizeGame} game={game.questions}/>
        : game.type === "Combinação" ? <GameCombination/>
        : <PeddyPapper/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  }
});

export default Game;