import React, {useEffect, useState} from 'react';
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
import axios from 'axios';


const Arts = ({navigation}) => {
  const [sliderId, setSliderId] = useState(0)
  const [status, setStatus] = useState('Obras')
  const [artists, setArtists] = useState(null)
  const [arts, setArts] = useState(null)
  const [techniques, setTechniques] = useState(null)


  async function getArtists() {
    const response = await axios.get('https://surrealismoapi.onrender.com/artists');
   if(response.status == 200){
    setArtists(response.data.artist)
    console.log(response.data)
   }
  }
  
  async function getArts() {
    const response = await axios.get('https://surrealismoapi.onrender.com/arts');
   if(response.status == 200){
    setArts(response.data.arts)
   }
  }

  async function getTecniques(){
    const response = await axios.get('https://surrealismoapi.onrender.com/techniques')
    if(response.status == 200){
      setTechniques(response.data.technique)
     }
  }
  
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
  
  useEffect(()=>{
    getArtists()
    getArts()
    getTecniques()
    console.log('tou aqui')
  },[])

  return (
    <View style={styles.titleContainer}>
      {artists && arts &&
        <View style={styles.titleContainer}>
        <SvgUri uri="https://osithual.sirv.com/Images/FCM/fundo.svg" style={styles.bg}/>
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
            {
              artists.map((artist)=>(
                <ScrollView key={artist._id}>
                  <Text style={styles.artistName}>{artist.name}</Text>
                  <Text style={styles.artistDates}>{artist.born}-{artist.death}</Text>
                  <ScrollView horizontal={true}>
                    {arts.filter(art => art.artist == artist._id).map(filteredArt =>(
                      <Pressable onPress={() => navigation.navigate('Art', {art: filteredArt})}><Image source={{uri:filteredArt.image}} style={styles.image}></Image></Pressable>
                      
                    ))}
                  </ScrollView>
                </ScrollView>
                
              ))
            }
          </ScrollView>
        }
        {
          status == 'Técnicas' && 
        
              <ScrollView style={styles.swiper}>
                {
                  techniques.map((technic)=>(
                    <ScrollView key={technic._id}>
                      <Text style={styles.artistName}>{technic.name}</Text>
                      <ScrollView horizontal={true}>
                        {arts.filter(art => art.technique == technic.name).map(filteredTechniques =>(
                          <Pressable  onPress={() => navigation.navigate('Art', {art: filteredTechniques})}><Image source={{uri:filteredTechniques.image}} style={styles.image}></Image></Pressable>
                        ))}
                      </ScrollView>
                    </ScrollView>
                  ))
                }
              </ScrollView>        
        }          
              
                          
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