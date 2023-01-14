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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfile = ({navigation}) => {
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão', 'password': '1234', 'active': 'true'}

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  function saveChanges() {
    
    if (username && (password == cPassword)){
      user.nome = username
      user.password = password
      Alert.alert(username, password)
    }
    
  }

  function disableUser(){
    user.active = 'false'
    // if(user.active = 'false'){
    //   Alert.alert(user.active)
    // }else{
    //   Alert.alert('still aqui')
    // }
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri resizeMode="contain" height='120%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2036.svg" style={styles.bg}/>
      <Pressable onPress={disableUser} style={styles.buttonDisable}><Text style={styles.buttonDisable.text}>Desativar Conta</Text></Pressable>
      <Text style={styles.nome}>Olá {user.nome}</Text>
      <KeyboardAwareScrollView style={styles.form}>
        <TextInput 
        placeholder='Username'
        onChangeText={setUsername}
        value={username}></TextInput>

        <TextInput 
        placeholder='Password'
        secureTextEntry 
        onChangeText={setPassword}
        value={password}></TextInput>

        <TextInput
        placeholder='Confirmação da password'
        secureTextEntry
        onChangeText={setCPassword}
        value={cPassword}></TextInput>
      </KeyboardAwareScrollView>
      
      <Pressable onPress={saveChanges} style={styles.buttonConfirm}><Text style={styles.buttonConfirm.text}>Guardar Alterações</Text></Pressable>
      
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
    top:-120,
    left: 0
  },
  nome:{
    flexDirection:'column',
    color: '#333333',
    marginLeft: 210,
    top: -200,
    fontWeight: 'bold',
  },
  form:{
    position: 'absolute',
    left: 50,
    bottom:300
    
  },
  buttonConfirm:{
    position: 'absolute',
    backgroundColor: '#2e3192',
    width: 343,
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
    bottom:35,
    text:{
      color: 'white',
      marginVertical: 12,
      marginHorizontal: 100
    }
    
  },
  buttonDisable:{
    position: 'absolute',
    backgroundColor: '#CE4848',
    width: 150,
    height: 50,
    right: 15,
    top: 30,
    borderRadius: 15,
    text:{
      color: 'white',
      marginVertical: 13,
      marginHorizontal: 19
    }
    
  }
});

export default EditProfile;