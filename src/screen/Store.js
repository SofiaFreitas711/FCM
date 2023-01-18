import React, {useState, useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Store = ({navigation}) => {
  async function getOffers() {
    const response = await axios.get('https://surrealismoapi.onrender.com/shop');
   if(response.status == 200){
    setOffers(JSON.stringify(response.data.shop))
    console.log(response.data.shop)
   }
  }
  async function tradeOffer(){
    const response = await axios.put(``)
    
  }
  let list = axios.get('https://surrealismoapi.onrender.com/shop')

  const [expanded, setExpanded] = React.useState(true);
  const [offers, setOffers] = React.useState();
  const [trade, setTrade] = React.useState(false);
  const [points, setPoints] = React.useState(1500)

  const handlePress = () => setExpanded(!expanded);

  function exchange() {
    if(points < offers.amountPoints){
     Alert.alert('Ainda não é possivel')
    }else{
      let trade = eval(points - offers.amountPoints).toString()
      setPoints(trade)
      Alert.alert(`${points}`)
      setTrade(true)
    }    
  }

  useEffect(() =>{
    getOffers();
  })
  
  return (
    <View style={styles.titleContainer}>
      {offers &&
        <View style={styles.titleContainer}>
          
          <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg" style={styles.bg}/>
          <View style={styles.points}>
            <Icon name="shopping-outline" size={20} color="#C2508E"></Icon>
            <Text style={styles.points.text}>{points}</Text>
          </View>
          
          <Text style={styles.title}>Loja</Text>
          
          <ScrollView>
            {
            offers.map((item) => {
                <List.Accordion
                  title={item.name}
                  expanded={expanded}
                  onPress={handlePress}
                  titleStyle={{ color:'white' }}
                  style={points >= item.amountPoints? styles.container: styles.containerOff}>
                  <List.Item title={item.info} titleStyle={{ color:'white' }} style={points >= item.amountPoints? styles.details: styles.detailsOff}/>               
                  <List.Item title={`Custo:${offers.amountPoints}`} titleStyle={{ color:'white' }} style={points >= item.amountPoints? styles.cost: styles.costOff}></List.Item>
                  {trade == false &&
                    <Pressable style={styles.teste} onPress={exchange}><Text style={styles.teste.text}>Trocar</Text></Pressable>
                  }
                  {trade == true &&
                    <Pressable style={styles.teste}><Text style={styles.teste.textTrade}>Troca efetuada</Text></Pressable>
                  }
                  
                </List.Accordion>
              })
            }
            
          </ScrollView>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top:-40,
    left:-125,
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
    // marginTop: 40,
    
  },
  containerOff:{
    backgroundColor: '#6D6B6B',
    borderRadius: 11,
    width: 324,
    height: 88,
    marginTop: 40,
    color: 'white'
  },
  details: {
    backgroundColor: '#C2508E',
    height: 100,
    color: 'white',
    marginTop: -20,
    color:'white'
  },
  detailsOff:{
    backgroundColor: '#6D6B6B',
    height: 100,
    color: 'white',
    marginTop: -20,
    color:'white'
  },
  cost:{
    backgroundColor: '#C2508E',
    height: 50,
    color: 'white',
    marginTop: -20,
    color:'white',
    textAlign: 'center',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11, 
  },
  costOff:{
    backgroundColor: '#6D6B6B',
    height: 50,
    color: 'white',
    marginTop: -20,
    color:'white',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11, 
  },
  button:{
    color:'#C2508E',
    backgroundColor: '#ffffff',
    height: 50,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11, 
    borderWidth: 1,
    borderColor: '#C2508E',
    
  },
  buttonOff:{
    color:'white',
    backgroundColor: '#6D6B6B',
    height: 50,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,  
  },
  points:{
    position:'absolute',
    flexDirection: 'row',
    top: 20,
    right: -100,
    width: 75,
    height: 25,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#C2508E',
    text:{
      color: '#C2508E',
    }
  },
  teste:{
    position: 'absolute',
    marginTop: 204,
    
    text:{
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ffffff',
      color: '#ffffff',
      width: 70,
      marginLeft: 240,
      
    },
    textTrade:{
      color: '#ffffff',
      marginHorizontal: 10,
      width: 120,
      marginLeft: 200,
    }
  }
  

});

export default Store;