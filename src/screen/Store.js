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
import axios from 'axios';
import { SvgUri } from 'react-native-svg';


const Store = ({navigation}) => {
  // const [loggedUser, setLoggedUser] = useState(null)

  // async function getUser() {
  //   const id = await AsyncStorage.getItem("userID");
  //   const response = await api.get(`/users/${id}`, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
  //     }
  //   })
  //   if (response.status == 200) {
  //     setLoggedUser(response.data.user);
  //   }
  // }

  async function getOffers() {
    const response = await axios.get('https://surrealismoapi.onrender.com/shop');
   if(response.status == 200){
    setOffers(response.data.shop)
    console.log(response.data.shop)
   }
  }

  const [expanded, setExpanded] = React.useState(true);
  const [offers, setOffers] = React.useState(null);
  const [trade, setTrade] = React.useState(false);
  const [points, setPoints] = React.useState(1500)

  const handlePress = () => setExpanded(!expanded);

  // function exchange(item) {
  //   if(loggedUser.points < item){
  //    Alert.alert('Ainda não é possivel')
  //   }else{
  //     let trade = eval(loggedUser.points - item).toString()
  //     Alert.alert(`${points}`)
  //     setTrade(true)
  //   }    
  // }

  useEffect(() =>{
    getOffers();
    // getUser()
    // console.log(loggedUser.points)
  },[])
  
  return (
    <View style={styles.titleContainer}>
      {offers &&
        <View style={styles.titleContainer}>
          <SvgUri uri="https://osithual.sirv.com/Images/FCM/fundo.svg" style={styles.bg}/>
          <Text style={styles.title}>Loja</Text>
          
          <ScrollView>
            {
              offers.map((item, index) => (
                  <List.Accordion
                    title={item.name}
                    expanded={expanded}
                    onPress={handlePress}
                    titleStyle={{ color:'white' }}
                    style={points >= item.amountPoints? styles.container: styles.containerOff}>
                    <List.Item title={item.info} titleStyle={{ color:'white', width: 300, fontSize: 10 }} style={points >= item.amountPoints? styles.details: styles.detailsOff}/>               
                    <List.Item title={`Custo:${item.amountPoints}`} titleStyle={{ color:'white' }} style={points >= item.amountPoints? styles.cost: styles.costOff}></List.Item>
                    {item.trade == false &&
                      <Pressable style={styles.teste} onPress={()=> exchange(item.amountPoints)}><Text style={styles.teste.text}>Trocar</Text></Pressable>
                    }
                    {item.trade == true &&
                      <Pressable style={styles.teste}><Text style={styles.teste.textTrade}>Troca efetuada</Text></Pressable>
                    }
                    
                  </List.Accordion>
              ))
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
    left:-30,
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
    marginTop: 60,
    
    
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
    color:'white',
    fontSize: 5,
  },
  detailsOff:{
    backgroundColor: '#6D6B6B',
    height: 100,
    color: 'white',
    marginTop: -20,
    color:'white',
    fontSize: 5,
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
    right: -10,
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