import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';

import { SvgUri } from 'react-native-svg';

import { Pressable } from 'react-native';


import { Text } from 'react-native-paper';
import api from '../../api/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async () => {
    await api
      .post(`/users/login`, {
        email: email,
        password: password,
      })
      .then(async function (response) {
        await AsyncStorage.setItem('token', response.data.accessToken);
        await AsyncStorage.setItem('userID', response.data.id);
        await AsyncStorage.setItem('type', response.data.type);
        navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log(error.response.data);
        setErrorMessage(error.response.data.msg);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SvgUri uri="https://atuousti.sirv.com/FCM/BgAuth.svg" style={styles.bg} />
        <View style={styles.containerLogo}>
          <SvgUri
            uri="https://atuousti.sirv.com/FCM/logo.svg"
            width={315}
            height={190}
          />
          <Text style={styles.welcome}>Sê bem-vindo de volta!</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="e-mail"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="palavra-passe"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity style={styles.loginButton} onPress={login}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.register}>Ainda não tens conta? </Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.register, styles.registerLink]}>
              Regista-te!
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: -40,
    left: -30,
  },
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: -30,
    alignItems: 'center',
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
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 0,
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 10,
    marginTop: -70,

  },
  textInput: {
    backgroundColor: 'transparent',
    marginBottom: 15,
    marginVertical: 30,
    marginLeft: 12,
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 5,
    paddingVertical: -5,
    borderRadius: 7,
    width: '100%',
    color: 'black',
  },
  loginButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2E3192',
    borderRadius: 15,
    width: 341,
    height: 52,
    justifyContent: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: -30,
    marginBottom: 20,
  },
  register: {
    marginTop: 45,
    color: 'black',
    fontSize: 13,
  },
  registerLink: {
    color: '#0047FF',
    fontStyle: 'italic',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    opacity: 0.75,
    fontWeight: 'bold',
  },
});

export default Login;
