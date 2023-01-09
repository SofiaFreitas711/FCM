import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

const QuizzGame = (props, {navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [alternativeSelected, setAlternateSelected] = useState([])
  const game = props.game;

  const selectAlternative = (alternative) => {
    const newAlternativeSelected = [...alternativeSelected]
    newAlternativeSelected[currentQuestion] = alternative
    setAlternateSelected(newAlternativeSelected);
  }

  const nextQuestion = () => {
    const newCurrentQuestion = currentQuestion + 1;
    setCurrentQuestion(newCurrentQuestion)
  }
  console.log(game.length);
  return (
      <View style={styles.container}>
        <SvgUri uri="https://phyrowns.sirv.com/Surrealismo/quizz.svg" style={styles.bg}/>
        <Text style={styles.title}>{game[currentQuestion].question}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.answerList}
          data={game[currentQuestion].alternatives}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={item !== alternativeSelected[currentQuestion] ? styles.buttonAlternative : styles.buttonAlternativeSelected} onPress={() => selectAlternative(item)}>
                <Text style={item !== alternativeSelected[currentQuestion] ? styles.buttonAlternativeText : styles.buttonAlternativeTextSelected}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
        <TouchableOpacity style={styles.nextButton} onPress={() => game.length - 1 > currentQuestion ? nextQuestion() : alert('Quizz Finalizado!')}>
          {
            game.length - 1 > currentQuestion ? <Text>Proxima</Text> : <Text>Finalizar</Text>
          }
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  bg: {
    position: 'absolute',
    top:-135,
    zIndex: -10,
    left:0,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  answerList: {
    marginTop: "42%"
  },
  buttonAlternative: {
    marginVertical: 15,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#54c5d0",
  },
  buttonAlternativeSelected: {
    marginVertical: 15,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#54c5d0",
    backgroundColor: "#54c5d0"
  },
  buttonAlternativeText: {
    color: '#54c5d0',
    fontSize: 14,
  },
  buttonAlternativeTextSelected: {
    color: "white",
    fontSize: 14,
  },
  nextButton: {
    position: "relative",
    right: "-25%",
    top: "-7%",
    width: 145,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54c5d0',
    borderRadius: 12
  },
});

export default QuizzGame;