import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {List} from 'react-native-paper'
import { SvgUri } from 'react-native-svg';
import axios from 'axios';

const Store = ({navigation}) => {
  const list = {'name':'Oferta 1', 'pontos':'350'}
  // let offers = axios.get()
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
  return (
    <View style={styles.titleContainer}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Loja</Text>
      <ScrollView>
        
          <List.Accordion
            title={list.name}
            expanded={expanded}
            onPress={handlePress}
            style={styles.container}>
            <List.Item title={list.pontos} style={styles.details}/>
          </List.Accordion>
        
      </ScrollView>
      
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top:-40,
    left:0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  container:{
    backgroundColor: '#C2508E',
    borderRadius: 11,
    width: 324,
    height: 88,
    marginTop: 40
  },
  text:{
    top: -15,
    left: 80,
    color: 'white',
    fontWeight:'bold'
  },

});

export default Store;