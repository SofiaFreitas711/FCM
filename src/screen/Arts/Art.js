import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Art = ({navigation}) => {
  const [fav, setFav] = useState(false)
  
  function change(){
    console.log('tou aqui')
  }
  function favs(){
    if(fav==false){
      setFav(true)
    }else
      setFav(false)
    // setFav==false? true:false
   console.log(fav)
  }

  return (
    <View style={styles.titleContainer}>
      {/* <Image></Image> */}
      <SvgUri uri="https://osithual.sirv.com/Images/FCM/Group%2039.svg" style={styles.bg}/>
      <Pressable onPress={()=>favs()} >
        {fav==false &&
          <Icon name="cards-heart-outline" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
        }
        {fav==true &&
          <Icon name="cards-heart" size={40} color="#54c5d0" style={[styles.icon]}></Icon>
        }
      </Pressable>
      <Pressable onPress={change}><Image style={styles.image} source={{uri:'https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg'}}></Image></Pressable>
      <View style={styles.info}>
        <Text style={styles.info.autor}>Nome</Text>
        <Text style={styles.info.obra}>Obra</Text>
      </View>
      <View style={styles.detalhes}>
        <Text><Text style={styles.detalhes.titulo}>Ano</Text></Text>
        <Text><Text style={styles.detalhes.titulo}>Técnica</Text></Text>
        <Text><Text style={styles.detalhes.titulo}>Localização</Text></Text>
      </View>
     
      
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
      fontSize: 30,
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
    position: 'absolute',
    borderRadius: 50,
    top: 440,
    left: 65
  },
  icon:{
    position: 'absolute',
    top:15,
    right: 10
  }
});

export default Art;