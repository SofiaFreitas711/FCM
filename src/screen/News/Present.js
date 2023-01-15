import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SvgUri } from 'react-native-svg';

const Present = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Icon
        name="menu"
        size={28}
        color="#000"
        style={styles.menuIcon}
      />
      <Text style={styles.title}>Atualidade</Text>
      <View>
        {/* Noticia em destaque */}
      </View>
      <View>
        <View>
          <Text style={styles.secundTitles}>Notícias mais recentes</Text>
          <TouchableOpacity>
            <Text>Todas &#x276C;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  bg: {
    position: 'absolute',
    top:-40,
    left:-20,
  },
  menuIcon: {
    marginVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  secundTitles: {
    color: "black",
    fontSize: 24,
    
  }
});

export default Present;