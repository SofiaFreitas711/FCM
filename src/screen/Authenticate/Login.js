import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import api from "../../api/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async () => {
    await api.post(`/users/login`, {
      email: email,
      password: password,
    })
      .then(async function (response) {

        await AsyncStorage.setItem("token", response.data.accessToken);
        await AsyncStorage.setItem("userID", response.data.id);
        await AsyncStorage.setItem("type", response.data.type);
        navigation.navigate('Games')
      })
      .catch(function (error) {
        console.log(error.response.data);
        setErrorMessage(error.response.data.msg)
      });
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.welcome}>Sê bem-vindo de volta!</Text>
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
          <Text style={[styles.register, styles.registerLink]}>Regista-te!</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  welcome: {
    color: "black",
    fontSize: 20
  },
  form: {
    width: "90%",
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    marginVertical: 30,
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.45)",
    paddingHorizontal: 5,
    paddingVertical: -5,
    width: "100%",
    color: "black",
  },
  loginButton: {
    backgroundColor: "#2E3192",
    width: "90%",
    height: 55,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: 'row',
  },
  register: {
    marginTop: 45,
    color: "black",
    fontSize: 13,
  },
  registerLink: {
    color: "#0047FF",
    fontStyle: "italic",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    opacity: 0.75,
    fontWeight: "bold",
  },
});

export default Login;