import { StyleSheet, Text, View, Animated, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";

import OnboardingItem from './OnboardingItem'
import Pagination from './Pagination'
import { SvgUri } from 'react-native-svg';
import { Pressable } from 'react-native';
import { navigation } from '@react-navigation/native'

listScreens = [
  {
    name: "Descobre ",
    image: "https://atuousti.sirv.com/FCM/Group%201(1).svg",
    description: "Explora de maneira fácil e conveniente a vasta coleção de arte surrealista da fundação.",
  },
  {
    name: "Atualiza-te",
    image: "https://atuousti.sirv.com/FCM/Camada%201.svg",
    description: "Verifica os alertas de notícias em tempo real, para que nunca perca as últimas atualizações.",
  },
  {
    name: "Joga",
    image: "https://atuousti.sirv.com/FCM/Group%204.svg",
    description: "Testa os teus conhecimentos e aprende de forma divertida e interativa.",
  },
  {
    name: "Ganha prémios",
    image: "https://atuousti.sirv.com/FCM/Loja.svg",
    description: "Acumula pontos, recebe ofertas e coleciona produtos inspirados nas obras de arte.",
  }
]

const OnboardingComp = () => {
  const flatListRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const handleonScroll = (event) => {
    Animated.event([
      {
        nativeEvent:
        {
          contentOffset:
            { x: scrollX }
        }
      }
    ],
      { useNativeDriver: false, }
    )(event);
  };

  const handleonViewableItemsChanged = useRef(({ viewableItems }) => {
    /* console.log('viewableItems', viewableItems) */
    setActiveIndex(viewableItems[0].index)
  }).current;

  const viewableConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <View>
        <SvgUri uri="https://atuousti.sirv.com/FCM/Menu.svg" style={styles.bg} />
        <FlatList data={listScreens}
          ref={flatListRef}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          onScroll={handleonScroll}
          onViewableItemsChanged={handleonViewableItemsChanged}
          viewabilityConfig={viewableConfig}
          style={styles.flat}
        />
      </View>
      <View style={styles.Pagination}>
        <Pagination data={listScreens} scrollX={scrollX} index={activeIndex} style={styles.pag} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback style={styles.button} onPress={() => {
          if (activeIndex + 1 < listScreens.length) {
            flatListRef.current.scrollToIndex({ animated: true, index: activeIndex + 1 })
          }
        }}>
          <Text style={styles.buttonText}>{activeIndex === listScreens.length - 1 ? 'COMEÇAR' : 'SEGUINTE'}</Text>
        </TouchableWithoutFeedback>
        <View style={activeIndex === listScreens.length - 1 ? {display: 'none'} : {marginBottom: 30}}>
        <Pressable onPress={() => { navigation.navigate('Home') }
        }>
          <Text style={{ color: '#2E3192', fontSize: 15, marginTop: 10 }}>Ignorar</Text>
        </Pressable>
        </View>
      </View>
    </View>
  )
}

export default OnboardingComp

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: -55,
    left: -30,

  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: -20,
    bottom: -10,
  },
  Pagination: {
    marginTop: -70
  },

  button: {
    width: 283,
    height: 52,
    backgroundColor: '#2E3192',
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  }

})


