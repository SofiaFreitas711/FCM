import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef, useState} from 'react'
import { FlatList } from "react-native-gesture-handler";

import NewsItem from './NewsItem'
import Pagination from './Pagination'

listCenas = [
  {
    name: "Teste 1",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Noticia",
  },
  {
    name: "Teste 2",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/72/c4/5d/right-in-the-city-centre.jpg?w=1200&h=-1&s=1",
    description: "blablabla",
    type: "Evento",
    date: "08-07-2021"

  }
]

const FeaturedNews = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const handleonScroll = (event) => {
    Animated.event([
      { nativeEvent: 
        { contentOffset: 
          { x: scrollX } 
        } 
      }
    ],
    {useNativeDriver: false,} 
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
      <View  style={styles.squareContainer}>
      <FlatList data={listCenas}
        renderItem={({ item }) => <NewsItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleonScroll} 
        onViewableItemsChanged={handleonViewableItemsChanged}
        viewabilityConfig={viewableConfig}
        />
        </View>
        <Pagination data={list} scrollX= {scrollX} index={activeIndex}/>
    </View>
    
  )
}

export default FeaturedNews

const styles = StyleSheet.create({
  squareContainer: {
    width: '70%',
    aspectRatio: 1, // square aspect ratio
    overflow: 'hidden'
  },
})
