import React, {useState} from 'react';
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
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Icon } from '@rneui/themed';

const Profile2 = ({navigation}) => {
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão'}
  const favoritos = [{'obras':'https://osithual.sirv.com/Images/cabra-recem-nascida-no-curral-retrato-de-cabra-bebe_491799-5872.jpg','artistas':['artista1', 'artista2'], 'noticias':['noticias1', 'noticias2']}]

  const [sliderId, setSliderId] = useState(0)

  function swipeIndex(id){
    setSliderId(id)
  }

  function edit(){
    Alert.alert('Estou aqui')
  }
  return (
    <View style={styles.container}>
        <SvgUri height='100%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2034.svg" style={styles.bg}/>

        {/* detalhes do utilizador */}
        <View style={styles.userInfo}>
            <Image source={{uri: 'https://www.nokidhungry.org/sites/default/files/styles/square_2x/public/2019-02/Cause%20Marketing%20and%20Licensing.png?h=0bf1863b&itok=rU0QF0nG'}} style={styles.userInfo.image}></Image>
            <Pressable style={styles.userInfo.text} onPress={edit}>
                <Text style={styles.nome}>{user.nome}  <Icon name='form' /></Text>
                <Text style={styles.details}>{user.idade} anos,</Text>
                <Text style={styles.details}>{user.localidade}</Text>
            </Pressable>
        </View>
        {/* Favoritos */}
        <View style={styles.tab}>
            <Text style={[sliderId == 0 ? styles.tabActive : styles.tabNotActive]}>Obras</Text>
            <Text style={[sliderId == 1 ? styles.tabActive : styles.tabNotActive]}>Artistas</Text>
            <Text style={[sliderId == 2 ? styles.tabActive : styles.tabNotActive]}>Notícias</Text>

        </View>
        <Swiper index={0} style={styles.swiper} loop={false} showsPagination={false} onIndexChanged={(idx) => swipeIndex(idx)}>
            {
            favoritos.map((item)=>{
                return(
                <View style={styles.swiper}>
                    <Image  style={styles.image} source={{uri:item.obras}}></Image>
                </View>
                )
            })
            }
            <View>
                <Text>Artistas</Text>
            </View>
            <View>
                <Text>Noticias</Text>
            </View>
        </Swiper>
        <View></View>
            
           
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
            marginTop: 70
        },
        text:{
            flexDirection:'column',
            color: '#333333',
            marginLeft: 40,
            marginTop: 120,
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

export default Profile2;