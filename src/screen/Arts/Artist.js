import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Pressable
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Artist = ({navigation, route}) => {

  const [sliderId, setSliderId] = useState(0)
  const [fav, setFav] = useState(false)
  const [artist, setArtist] = useState(null)
  const [artistInfo, setArtistInfo] = useState(null)
  const [art, setArt] = useState(null)
  const [loggedUser, setLoggedUser] = useState(null)

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

  async function favs(){
    let favs = loggedUser.favoritesArtist;
    if(favs.find(favourite => favourite == artist._id)){
      favs.pop(artist._id)
      console.log(favs);
      setLoggedUser((prevState)=>{
        return{
          ...prevState,
          favoritesArtist: favs
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
        favs = loggedUser.favoritesArtist.push(artist._id)
        setFav(true)
        setLoggedUser((prevState)=>{
          return{
            ...prevState,
            favoritesArtist: favs
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
    const response = await axios.get(`https://surrealismoapi.onrender.com/artists/${artistId}`)
    if(response.status == 200){
      setArtistInfo(response.data.artist)
      console.log(response.data.artist)
     }
  }

  async function getArt(){
    const response = await axios.get('https://surrealismoapi.onrender.com/arts')
    if(response.status == 200){
      setArt(response.data.arts)
     }
  }

  function swipeIndex(id){
    setSliderId(id)
  }

  function favs(){
    if(fav==false){
      setFav(true)
    }else
      setFav(false)
    // setFav==false? true:false
   console.log(fav)
  }

  useEffect(()=>{
    setArtist(route.params.artist)
    getArtist(route.params.artist)
    getArt(),
    getUser()
  },[])

  return (
    <View style={styles.titleContainer}>
      {artistInfo && art &&
        <View style={styles.titleContainer}>
          <SvgUri uri="https://osithual.sirv.com/Images/FCM/fundo.svg" style={styles.bg}/>
          <Image source={{uri:artistInfo.image}} style={styles.artist}></Image>
          <SvgUri uri="https://osithual.sirv.com/Images/FCM/gradiente.svg" style={styles.gradient}/>
          <Pressable onPress={()=>favs()} >
            {fav==false &&
              <Icon name="cards-heart-outline" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
            }
            {fav==true &&
              <Icon name="cards-heart" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
            }
          </Pressable>
          <View style={styles.tab}>
                <Text style={[sliderId == 0 ? styles.tabActive : styles.tabNotActive]}>Biografia</Text>
                <Text style={[sliderId == 1 ? styles.tabActive : styles.tabNotActive]}>Obras</Text>
          </View>

          <Swiper index={0} style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(idx) => swipeIndex(idx)}>
            <ScrollView><Text>{artistInfo.info}</Text></ScrollView>

            <ScrollView>
                {art.filter(art => art.artist == artistInfo._id).map(filteredArt =>(
                    <Image source={{uri:filteredArt.image}} style={styles.image}></Image>
                    
                  ))
                }
            </ScrollView>
          </Swiper>
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
    top:0,
    left:0
  },
  artist:{
    width: Dimensions.get("window").width,
    height: 300,
    position: 'absolute',
    top:150
  },
  gradient:{
    position: 'absolute',
    bottom: 0,
  },
  tab:{
    position: 'absolute',
    flexDirection:'row',
    bottom: 350,
    alignSelf: 'center',
    color: '#333333',        
    name:{ 
        paddingHorizontal:10,           
        color: '#9697C8'
    } 
  },
  tabNotActive:{
      paddingHorizontal:10,
      color: '#333333'
  },
  tabActive:{
      paddingHorizontal:10,
      color: '#2e3192',
      fontWeight: 'bold'
  },
  swiper:{
    position: 'absolute',
    top: 500,
    width: 400,
    marginHorizontal:10
  },
  icon:{
    position: 'absolute',
    top:15,
    right: 10
  }
});

export default Artist;