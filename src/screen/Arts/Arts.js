import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Dimensions
} from 'react-native';

import { SvgUri } from 'react-native-svg';
import Swiper from 'react-native-swiper';


const Arts = ({navigation}) => {
  const [sliderId, setSliderId] = useState(0)
  const [status, setStatus] = useState('Obras')

  const artist1 = {'nome': 'Carlos Eduardo','nasc': 1932, 'morte': 2014, 'obras':['https://osithual.sirv.com/Images/FCM/FCM00006.jpg', 'https://osithual.sirv.com/Images/FCM/FCM00007.jpg', 'https://osithual.sirv.com/Images/FCM/FCM00013.jpg', 'https://osithual.sirv.com/Images/FCM/FCM02909.jpg','https://osithual.sirv.com/Images/FCM/FCM02909.jpg','https://osithual.sirv.com/Images/FCM/FCM02909.jpg']}
  
  
  const ListTab = [
    {
        status: 'Obras'
    },
    {
        status: 'Técnicas'
    }
]

  const setStatusFilter = status => {
          setStatus(status)
    }

  function swipeIndex(id){
    setSliderId(id)
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Surrealismo</Text>
    
      <View style={styles.tabs}>
        {ListTab.map((tab, index) => (
          <Pressable key={index} style={styles.tab} onPress={() => setStatusFilter(tab.status)}>
            <Text style={[styles.tabText, status === tab.status && styles.textTabActive]}>{tab.status}</Text>
          </Pressable>
        ))}
      </View>
      {status == 'Obras' &&
        <ScrollView style={styles.swiper}>
          <Text style={styles.artistName}>{artist1.nome}</Text>
          <Text style={styles.artistDates}>{artist1.nasc}-{artist1.morte}</Text>
          <ScrollView horizontal={true}>
            {
              artist1.obras.map((item)=>{
                  return(
                      <Image source={{uri:item}} style={styles.image}></Image>
                  
                  )
              })
            }
          </ScrollView>
        
        </ScrollView>
      }
      {
        status == 'Técnicas' && 
        <View>
            <Text>Técnicas</Text>
        </View>
      }          
            
                        
      
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    top: 100,
    left: 30
  },
  bg: {
    position: 'absolute',
    top:0,
    left:0,
  },
  tabs:{
    position:'absolute',
    flexDirection: 'row',
    top:163
  },
  tab:{
    width: Dimensions.get("window").width / 2,
    padding: 14
  },
  tabText:{
    color: '#333333',
    alignSelf: 'center'
  },
  textTabActive:{
    color:'#E31E27'
  },
  // tab:{
  //   position: 'absolute',
  //   flexDirection:'row',
  //   top:183,
  //   alignSelf: 'center',
  //   color: '#333333',  
  //   paddingHorizontal:50,      
  //   name:{ 
                   
  //       color: '#333333'
  //   } 
  // },
  // tabActive:{
  //   position: 'absolute',
  //   flexDirection:'row',
  //   top:183,
  //   left:15,
  //   alignSelf: 'center',
  //   color: '#333333',  
  //   paddingHorizontal:50,      
  //   name:{ 
  //     paddingHorizontal:50,
  //     color: '#E31E27',
  //     fontWeight: 'bold',
  //   } 
  // },
  // tabNotActive:{
  //   position: 'absolute',
  //   flexDirection:'row',
  //   top:183,
  //   alignSelf: 'center',
  //   color: '#333333',  
  //   paddingHorizontal:50,      
  //   name:{ 
  //     paddingHorizontal:50,
  //     color: '#333333'
  //   } 
  // },
  swiper: {
    top: 200,    
  }, 
  image:{
    width:120,
    height:100,
    borderRadius: 15,
    marginVertical: 15,
  },
  artistName:{
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 20,
    left: 30
  },
  artistDates:{
    left: 30
  }
});

export default Arts;