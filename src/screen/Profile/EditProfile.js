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
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão'}

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [localidade, setLocalidade] = useState('')

  function saveChanges() {
    Alert.alert('feito')
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri resizeMode="contain" height='100%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2036.svg" style={styles.bg}/>
      <Text style={styles.nome}>Olá {user.nome}</Text>
      <KeyboardAwareScrollView style={styles.form}>
        <TextInput 
        placeholder='Username'
        onChange={setUsername}
        value={username}></TextInput>

        <TextInput 
        placeholder='Password'
        secureTextEntry 
        onChange={setPassword}
        value={password}
        style={styles.form}></TextInput>

        <TextInput
        placeholder='Confirmação da password'
        secureTextEntry
        onChange={setCPassword}
        value={cPassword}></TextInput>

        <TextInput
        placeholder='Localidade'
        onChange={setLocalidade}
        value={localidade}></TextInput>
      </KeyboardAwareScrollView>

      <Pressable onPress={saveChanges} style={styles.buttonConfirm}><Text>Guardar Alterações</Text></Pressable>
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
    position: 'absolute',
    left: 150
  }
});

export default EditProfile;