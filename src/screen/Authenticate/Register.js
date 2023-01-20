import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
Pressable,
  Image,
  ScrollView,
} from 'react-native';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from 'react-native-date-picker';

import { SvgUri } from 'react-native-svg';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [locality, setLocality] = useState('');
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessagePassword, setErrorMessagePassword] = useState(null);

  const confPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  } 

  const login = async () => {
    await api.post(`/users/login`, {
      email: email,
      password: password,
    })
      .then(async function (response) {
        console.log(response.data);

        await AsyncStorage.setItem("token", response.data.accessToken);
        await AsyncStorage.setItem("userID", response.data.id);
        await AsyncStorage.setItem("type", response.data.type);
        navigation.navigate('HomePage')
      })
      .catch(function (error) {
        console.log(error.response.data);
        setErrorMessage(error.response.data.msg)
      });
  }

  const register = async () => {
    if (name == '' || email == '' || password == '' || birthDate == '' || locality == '') {
      setErrorMessage('Campos em falta! Preencha todas!')
    } else {
      setErrorMessagePassword(null)
      if (confPassword()) {
        setErrorMessagePassword(null)
        await api.post(`/users/register`, {
          name: name,
          email: email,
          password: password,
          birthDate: birthDate,
          locality: locality,
      })
      .then(async function (response) {
          console.log(response.data);
          
          login()
      })
      .catch(function (error) {
          console.log(error.response.data);
      });
      } else {
        setErrorMessagePassword("As palavras-passes não são iguais!!");
      }
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <SvgUri uri="https://atuousti.sirv.com/FCM/BgAuth.svg" style={styles.bg} />
      <View style={styles.containerLogo}>
          <SvgUri uri="https://atuousti.sirv.com/FCM/logo.svg" width={315} height={190} />
          <Text style={styles.welcome}>Cria uma conta!</Text>
        </View>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          placeholder="e-mail"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Palavra-passe"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirmar Palavra-passe"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Text style={styles.errorMessage}>{errorMessagePassword}</Text>
        {/* <TextInput
          style={styles.textInput} 
          placeholder="Data de nascimento"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setBirthDate}
          value={birthDate}
        /> */}
        <Pressable title="Open" onPress={() => setOpen(true)} style={styles.date}>
          <Text style={{marginBottom: 5}}>Data de nascimento</Text>
          </Pressable>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={birthDate}
          onConfirm={(date) => {
            setOpen(false)
            setBirthDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Localidade"
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
          onChangeText={setLocality}
          value={locality}
        />
        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.registerButtonText}>Registar</Text>
        </TouchableOpacity>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: -40,
    left: -30,
    height: 1500,
  },

  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 0,
  },

  welcome: {
    textAlign: 'center',
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    marginTop: -40,

  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    marginBottom: 10,
    marginTop: 20,
  },
  textInput: {
    backgroundColor: 'transparent',
    marginVertical: 30,
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.45)",
    paddingHorizontal: 5,
    paddingVertical: -5,
    width: "100%",
    color: "black",
  },
  date: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 5,
    paddingVertical: -5,
    width: "100%",
    marginVertical: 20,
    marginLeft: 12,

  },
  registerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: "#2E3192",
    width: "90%",
    height: 55,
    justifyContent: 'center',
    borderRadius: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: -0.41

  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    opacity: 0.75,
    fontWeight: "bold",
    marginTop: -25,
    marginBottom: 25,
  },
});

export default Register;