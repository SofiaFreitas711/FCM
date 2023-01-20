import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Dimensions
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Art = ({navigation, route}) => {
  const [fav, setFav] = useState(false)
  const [art, setArt] = useState(null)
  const [artist, setArtist] = useState(null)
  const [loggedUser, setLoggedUser] = useState(null)

  async function favs(){
    let favs = loggedUser.favoritesArt;
    if(favs.find(favourite => favourite == art._id)){
      favs.pop(art._id)
      console.log(favs);
      setLoggedUser((prevState)=>{
        return{
          ...prevState,
          favoritesArt: favs
        }

      })
      setFav(false)
      await axios.patch(`https://surrealismoapi.onrender.com/users/${loggedUser._id}`,loggedUser,{
        headers:{
          'Accept': 'application/json',
          'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
        }
      })
    }else
      if(loggedUser){
        favs = loggedUser.favoritesArt.push(art._id)
        setFav(true)
        setLoggedUser((prevState)=>{
          return{
            ...prevState,
            favoritesArt: favs
          }
  
        })
        await axios.patch(`https://surrealismoapi.onrender.com/users/${loggedUser._id}`,loggedUser,{
        headers:{
          'Accept': 'application/json',
          'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
        }
      })
      }
  }

  async function getArtist(artistId){
    const response = await axios.get(`https://surrealismoapi.onrender.com/artists/${artistId}`,)
    if(response.status == 200){
      setArtist(response.data.artist)
      console.log(response.data.artist)
     }
  }

  async function getUser() {
    const id = await AsyncStorage.getItem("userID");
    const response = await api.get(`/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
      }
    })
    if (response.status == 200) {
      setLoggedUser(response.data.user);
    }
  }

  useEffect(()=>{
    setArt(route.params.art)
    getArtist(route.params.art.artist)
    getUser()
  }, [])

  return (
    <View style={styles.titleContainer}>
      {art && artist &&
        <View style={styles.titleContainer}>
          <Image source={{uri: art.image}} style={styles.artImage}></Image>
          <SvgUri uri="https://osithual.sirv.com/Images/FCM/Group%2039.svg" style={styles.bg}/>
          <Pressable onPress={()=>favs()} >
            {fav == false &&
              <Icon name="cards-heart-outline" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
            }
            {fav==true  &&
              <Icon name="cards-heart" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
            }
          </Pressable>
          <Pressable style={styles.pressable} onPress={() => navigation.navigate('Artist', {artist: art.artist})}><Image style={styles.image} source={{uri:artist.image}}></Image></Pressable>
          <View style={styles.info}>
            <Text style={styles.info.autor}>{artist.name}</Text>
            <Text style={styles.info.obra}>{art.name}</Text>
          </View>
          <View style={styles.detalhes}>
            <Text style={styles.text}><Text style={styles.detalhes.titulo}>Ano</Text>{art.date}</Text>
            <Text style={styles.text}><Text style={styles.detalhes.titulo}>Técnica</Text>{art.technique}</Text>
            <Text style={styles.text}><Text style={styles.detalhes.titulo}>Localização</Text>{art.location}</Text>
          </View>
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
  },
  bg:{
    position: 'absolute',
    bottom:0
  },
  info:{
    alignItems: 'center',
    justifyContent: 'center',
    top: 470,
    left: 90,
    autor:{
      fontWeight: 'bold',
      color: '#2e3192'
    },
    obra:{
      fontWeight: 'bold',
      width: 120,
      fontSize: 20,
      color: '#333333'
    }
  },
  detalhes:{
    color:'#333333',
    marginTop: 550,
    left: 15,
    titulo:{
      color: '#2e3192',
      fontWeight: 'bold',
    }
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff'
  },
  icon:{
    position: 'absolute',
    top:15,
    right: 10
  },
  artImage:{
    position:'absolute',
    top:0,
    left:0,
    width: 380,
    height: 400,
  },
  text:{
    color: '#333333'
  },
  pressable: {
    width:100,
    height:100,
    position: 'absolute',
    top: 440,
    left: 65,
  }
});

export default Art;