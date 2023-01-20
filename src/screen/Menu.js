import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { SvgUri } from 'react-native-svg';
import IconMenu from 'react-native-vector-icons/Feather'


const Menu = ({navigation}, props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/BackGround/Menu.png')} style={{ width: '100%', height: '100%'}}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', borderBottomColor: 'rgba(164, 164, 164, 1)', borderBottomWidth: 1, marginHorizontal: 10 , marginVertical:10}}>
              <Image
              source={{uri: 'https://atuousti.sirv.com/FCM/Rene-Magritte-The-Art-of-living.JPG'}}
              style={styles.profilePic} />
            <Text style={styles.nameUser}>Joaquim</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                  <Text
                    style={styles.buttonText
                    }>
                    Ver Perfil
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('HomePage')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Home.svg" />
                <Text style={styles.linkButtonText}>Página Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Arts')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Galeria.svg" />
                <Text style={styles.linkButtonText}>Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Present')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Atualidade.svg" />
                <Text style={styles.linkButtonText}>Atualidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Games')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Jogos.svg" />
                <Text style={styles.linkButtonText}>Jogos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Store')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Loja.svg" />
                <Text style={styles.linkButtonText}>Loja</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('AboutUs')}>
                <SvgUri width="50" height="50" uri="https://atuousti.sirv.com/FCM/Sobre%20N%C3%B3s.svg" />
                <Text style={styles.linkButtonText}>Sobre</Text>
            </TouchableOpacity>
          </View>
        <View style={{ marginVertical:10, marginHorizontal:25, borderTopWidth: 1, borderTopColor: 'rgba(164, 164, 164, 1)' }}>
          <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{uri: 'https://atuousti.sirv.com/FCM/logout.png'}} style={{ width: 22, height: 22, marginLeft: 30 }} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 20,
                  color: 'black',
                }}>
                Sair
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  nameUser: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: 90,
    marginTop: 45,
    position: 'absolute',
  },
  button: {
    marginTop: 70,
    marginLeft: 10,
    marginBottom: 30,
    width: 83,
    height: 20,
    paddingVertical: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2E3192',
    backgroundColor: 'white',
    color: 'black',
  },
  buttonText: {
    color: '#2E3192',
    fontSize: 13,
  },
  profilePic: {
    height: 75,
    width: 75,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 35,
  },
  linkButton: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center' 
  },
  linkButtonText: {
    color: "black",
    marginLeft: 10,
    fontSize: 16,
  }
});

export default Menu;