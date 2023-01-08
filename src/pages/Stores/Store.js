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

const Store = ({navigation}) => {
  let points = 500
  const list = {'name':'Oferta 1', 'pontos':350 , 'descricao':'info 1'}
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  function exchange() {
    // Alert.alert('cheguei aqui')
    if(points < list.pontos){
     Alert.alert('Ainda não é possivel')
    }else{
      let trade = eval(points - list.pontos).toString()
      points = trade
      Alert.alert(`${points}`)
    }    
  }
  
  return (
    <View style={styles.titleContainer}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
      <Text style={styles.title}>Loja</Text>
      
      <ScrollView>
        
          <List.Accordion
            title={list.name}
            expanded={expanded}
            onPress={handlePress}
            style={points >= list.pontos? styles.container: styles.containerOff}>
            <List.Item title={list.descricao} style={points >= list.pontos? styles.details: styles.detailsOff}/>
            <List.Item title={list.pontos} style={points >= list.pontos? styles.details: styles.detailsOff}/>
            <List.Item title={'Trocar'} onPress={exchange}></List.Item>
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
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    padding: 40,
  },
  container:{
    backgroundColor: '#C2508E',
    borderRadius: 11,
    width: 324,
    height: 88,
    marginTop: 40,
    color: 'white'
  },
  containerOff:{
    backgroundColor: '#808080',
    borderRadius: 11,
    width: 324,
    height: 88,
    marginTop: 40,
    color: 'white'
  },
  details: {
    backgroundColor: '#C2508E',
    height: 100,
    borderRadius: 11,
    color: 'white',
    marginTop: -40,
    color:'white'
  },
  detailsOff:{
    backgroundColor: '#6D6B6B',
    height: 100,
    borderRadius: 11,
    color: 'white',
    marginTop: -40,
    color:'white'
  },
  button:{
    width: 30
  },
  
  

});

export default Store;