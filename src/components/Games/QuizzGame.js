import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import ImageComponent from './ImageComponent.js';

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

  const finalizeQuizz = () => {
    let rightQuestion = 0;
    for (let i = 0; i <= currentQuestion; i++) {
      if (alternativeSelected[i] === game[i].answer) {
        rightQuestion++
      }
    }

    props.finalizeQuizz(rightQuestion)
  }

  return (
      <View style={styles.container}>
        <SvgUri uri="https://phyrowns.sirv.com/Surrealismo/quizz.svg" style={styles.bg}/>
        <Text style={styles.title}>{game[currentQuestion].question}</Text>
        { game[currentQuestion].image ? 
          <ImageComponent image={game[currentQuestion].image}/>
        : ''}
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
        <TouchableOpacity style={styles.nextButton} onPress={() => game.length - 1 > currentQuestion ? nextQuestion() : finalizeQuizz()}>
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
  image: {
    position: "absolute",
    width: 140,
    height: 105,
    right: 25,
    top: 55,

    shadowOffset: { width: 0, height: 4 }, shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 4, shadowOpacity: 1,
    borderRadius: 11,
  }
});

export default QuizzGame;