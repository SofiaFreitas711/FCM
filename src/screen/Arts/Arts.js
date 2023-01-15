import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Swiper from 'react-native-swiper';

const Arts = ({navigation}) => {
  const [sliderId, setSliderId] = useState(0)

  function swipeIndex(id){
    setSliderId(id)
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Surrealismo</Text>
      <View style={styles.tab}>
            <Text style={[sliderId == 0 ? styles.tabActive : styles.tabNotActive]}>Obras</Text>
            <Text style={[sliderId == 1 ? styles.tabActive : styles.tabNotActive]}>Artistas</Text>
        </View>
        <Swiper index={0} style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(idx) => swipeIndex(idx)}>
            {/* {
            favoritos.map((item)=>{
                return(
                <View style={styles.swiper}>
                    <Image  style={styles.image} source={{uri:item.obras}}></Image>
                </View>
                )
            })
            } */}
            <View>
                <Text>Artistas</Text>
            </View>
            <View>
                <Text>Noticias</Text>
            </View>
        </Swiper>
      
      {/* <ScrollView
  horizontal={true}
  >
  .
  .
  .
  </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  bg: {
    position: 'absolute',
    top:0,
    left:0,
  },
  tab:{
    position: 'absolute',
    flexDirection:'row',
    bottom: 490,
    alignSelf: 'center',
    color: '#333333',        
    name:{ 
        paddingHorizontal:10,           
        color: '#9697C8'
    } 
  },
  tabNotActive:{
      paddingHorizontal:10,
      color: '#9697C8'
  },
  tabActive:{
      paddingHorizontal:10,
      color: '#2e3192'
  },
});

export default Arts;