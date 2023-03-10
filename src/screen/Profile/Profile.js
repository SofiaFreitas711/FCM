import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  ScrollView
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconMenu from 'react-native-vector-icons/Feather'


const Profile = ({navigation}) => {

  const [sliderId, setSliderId] = useState(0)
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
      //console.log(response.data)
      setLoggedUser(response.data.user);
    }
  }

  function swipeIndex(id){
    setSliderId(id)
  }

  useEffect(()=>{
    getUser()
  })

  return (
    <View style={styles.container}>
        {
            loggedUser &&
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Menu')} style={{zIndex: 1}}>
                    <IconMenu name="menu" color="#000" size={25} style={{margin: 15}}/>
                </Pressable>
                <SvgUri height='100%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2034.svg" style={styles.bg}/>

                {/* detalhes do utilizador */}
                <View style={styles.userInfo}>
                    <Image source={{uri: loggedUser.image}} style={styles.userInfo.image}></Image>
                    <Pressable style={styles.userInfo.text} onPress={() => navigation.navigate('EditProfile', {user: loggedUser._id})}>
                        <Text style={{color:'#333333'}}>{loggedUser.name} <Icon name="account-edit" size={40} color="#333333" style={[styles.icon]}></Icon></Text>
                        <Text style={{color: '#333333'}} >{loggedUser.locality}</Text>
                    </Pressable>
                </View>

                {/* Favoritos */}
                <View style={styles.tab}>
                    <Text style={[sliderId == 0 ? styles.tabActive : styles.tabNotActive]}>Obras</Text>
                    <Text style={[sliderId == 1 ? styles.tabActive : styles.tabNotActive]}>Artistas</Text>
                    <Text style={[sliderId == 2 ? styles.tabActive : styles.tabNotActive]}>Not??cias</Text>

                </View>
                <Swiper index={0} style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(idx) => swipeIndex(idx)}>
                    {
                    loggedUser.favoritesArt.map((item)=>{
                        return(
                        <View style={styles.swiper}>
                            <Text>Esta feature n??o est?? pronta para ti</Text>
                        </View>
                        )
                    })
                    }
                    <View>
                        {
                        loggedUser.favoritesArtist.map((item)=>{
                            return(
                            <View style={styles.swiper}>
                                <Text>Esta feature n??o est?? pronta para ti</Text>
                            </View>
                            )
                        })
                        }
                    </View>
                    <View>
                        {
                        loggedUser.favoritesNew.map((item)=>{
                            return(
                            <View style={styles.swiper}>
                                <Image  style={styles.image} source={{uri:item.obras}}></Image>
                            </View>
                            )
                        })
                        }
                    </View>
                </Swiper>
                <View></View>

            </View>
        }
        
            
           
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-around'
    },
    bg:{
        position: 'absolute',
        top:0,
        left:0  
    },
    userInfo:{
        flexDirection:'row',
        marginTop:50,
        image:{
            width:100,
            height:100,
            borderRadius:50,
            marginLeft: 60,
            marginTop: 30
        },
        text:{
            flexDirection:'column',
            color: '#333333',
            marginLeft: 40,
            marginTop: 90,
        },
        
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
    image:{
        width:100,
        height:100,
        borderRadius: 15
    },
    swiper:{
        position: 'absolute',
        top: 50,
        left: 20
        

    }
    

});

export default Profile;