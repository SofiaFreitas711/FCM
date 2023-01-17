import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import userAPI from '../../api/userAPI.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await userAPI.login(email, password);
    }
    catch (error) {
      console.log(error);
    }
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
  }
});

export default Login;