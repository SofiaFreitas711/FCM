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
  Modal
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BlurView } from 'expo-blur'

const EditProfile = ({navigation}) => {
  const user = {'nome': 'César Marques', 'idade': 12, 'localidade': 'Portimão', 'password': '1234', 'active': 'true'}

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  function saveChanges() {
    
    if (username && (password == cPassword)){
      user.nome = username
      user.password = password
      Alert.alert(username, password)
    }
    
  }

  function disableUser(){
    user.active = 'false'
    if(user.active = 'false'){
      Alert.alert(user.active)
    }else{
      Alert.alert('still aqui')
    }
  }

  return (
    <View style={styles.titleContainer}>
      <SvgUri resizeMode="contain" height='120%' width='100%' uri="https://osithual.sirv.com/Images/FCM/Group%2036.svg" style={styles.bg}/>
      <Pressable onPress={() => setModalVisible(true)} style={styles.buttonDisable}><Text style={styles.buttonDisable.text}>Eliminar Conta</Text></Pressable>
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

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
        >
          <BlurView intensity={100} tint='dark' style={styles.containerModal}>
              <View style={styles.modal}>
                <Pressable style={styles.botaoCancelar} onPress={() => setModalVisible(false)}>
                  <Text style={styles.botaoCancelar.txt}>X</Text>
                  <Text style={styles.txtModal}>Esta ação vai eliminar a conta. Desejas continuar com esta ação?</Text>
                  <Pressable onPress={disableUser} style={styles.buttonDisableModal}><Text style={styles.buttonDisableModal.text}>Desativar Conta</Text></Pressable>
                </Pressable>
              </View>
          </BlurView>
      </Modal>
      
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
      marginHorizontal: 24
    }
    
  },
  containerModal: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    blurRadius:1
},
modal: {
    backgroundColor: '#F6F4F2',
    borderRadius: 30,
    width: '90%',
    height: '60%'
},
botaoCancelar:{
  position: 'absolute',
  left:30,
  top:30,
  
},
txtModal: {
  width: 120,
  alignItems: 'center',
  marginHorizontal: 85,
  marginVertical: 125,
  textAlign: 'center',
},
buttonDisableModal:{
  position: 'absolute',
  backgroundColor: '#CE4848',
  width: 150,
  height: 50,
  left: 75,
  bottom: 0,
  borderRadius: 15,

  text:{
    color: 'white',
    marginVertical: 13,
    marginHorizontal: 19,
    
  }
  
},
});

export default EditProfile;