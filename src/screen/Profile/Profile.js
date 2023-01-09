import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert
} from 'react-native';
import { SvgUri } from 'react-native-svg';

const Profile = ({navigation}) => {
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão'}
  function edit(){
    Alert.alert('Estou aqui')
  }
  return (
    <View style={styles.titleContainer}>
      <SvgUri uri="https://osithual.sirv.com/Images/Group%2031.svg" style={styles.vetor1}/>
      <SvgUri uri="https://osithual.sirv.com/Images/Group%2032.svg" style={styles.vetor2}/>
      <Text style={styles.nome}>{user.nome}</Text>
      <Text style={styles.details}>{user.idade}, {user.localidade}</Text>
      <Pressable onPress = {() => navigation.navigate('Order',{posto:item})} style={styles.button}>
        <Text>Obras</Text>
      </Pressable>
      <Pressable onPress = {() => navigation.navigate('Order',{posto:item})} style={styles.button}>
        <Text>Artistas</Text>
      </Pressable>
      <Pressable onPress = {() => navigation.navigate('Order',{posto:item})} style={styles.button}>
        <Text>Notícias</Text>
      </Pressable>
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
  vetor1:{
    top:-150
  },
  vetor2:{
    top: 220
  },
  nome:{
    top: -460,
    left: 64,
    fontWeight: 'bold'
  }, 
  details:{
    top: -460,
    left: 55
  }
});

export default Profile;