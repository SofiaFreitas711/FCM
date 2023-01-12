import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  ScrollView,
  TextInput,
  TextComponent,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

const EditProfile = ({navigation}) => {
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão'}

  function saveChanges() {
    Alert.alert('feito')
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri height='100%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2036.svg" style={styles.bg}/>
      <Text style={styles.nome}>Olá {user.nome}</Text>
      <View style={styles.form}>
        <TextInput placeholder='Username'></TextInput>
        <TextInput placeholder='Password' secureTextEntry></TextInput>
        <TextInput placeholder='Confirmação da password' secureTextEntry></TextInput>
        <TextInput placeholder='Localidade'></TextInput>
        <Pressable onPress={saveChanges}><Text>Guardar Alterações</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent:'space-around'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  bg:{
    position: 'absolute',
    top:-50,
    left:0  
  },
  nome:{
    flexDirection:'column',
    color: '#333333',
    marginLeft: 210,
    marginTop: 0,
    fontWeight: 'bold',
  },
  form:{
    textDecorationLine: 'underline',
  }
});

export default EditProfile;