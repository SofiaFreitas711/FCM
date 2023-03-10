import React from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import screens */

import Onboarding from '../screen/Onboarding'
// import LoginToken from '../screen/Authenticate/LoginToken';
import Login from '../screen/Authenticate/Login'
import Register from '../screen/Authenticate/Register'

import Home from '../screen/HomePage'

import Arts from '../screen/Arts/Arts'
import Art from '../screen/Arts/Art'
import Artist from '../screen/Arts/Artist'

import Present from '../screen/News/Present'
import Events from '../screen/News/Events'
import Event from '../screen/News/Event'
import News from '../screen/News/News'
import New from '../screen/News/New'

import Games from '../screen/Games/Games'
import Game from '../screen/Games/Game'
import Leaderboard from '../screen/Games/Leaderboard'

import Store from '../screen/Store'

import EditProfile from '../screen/Profile/EditProfile'
import Profile from '../screen/Profile/Profile'

import AboutUs from '../screen/AboutUs'

import Error from '../screen/Error'

// import Menu from '../components/Menu'
import Menu from '../screen/Menu'


import AsyncStorage from '@react-native-async-storage/async-storage';

import { SvgUri } from 'react-native-svg';

import { Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <Menu {...props} />} 
    screenOptions={{
      headerTitle: "",
      headerTitleStyle: { color: '#fff' },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: 'transparent',
      },
      drawerActiveTintColor: '#2E3192',
      drawerInactiveTintColor: 'black',
      drawerLabelStyle: {
        marginLeft: -16,
      },
      drawerStyle: {
        width: screenWidth,
      }
    }}>

      <Drawer.Screen name="P??gina Inicial" component={Home} options={{
        drawerIcon: () => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Home.svg" />
        ),

      }} />
      <Drawer.Screen name="Galeria" component={Arts} options={{
        drawerIcon: ({ }) => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Galeria.svg" />
        ),
      }} />
      <Drawer.Screen name="Atualidade" component={Present} options={{
        drawerIcon: ({ }) => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Atualidade.svg" />
        ),
      }} />
      <Drawer.Screen name="Jogos" component={Games} options={{
        drawerIcon: ({ }) => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Jogos.svg" />
        ),
      }} />
      <Drawer.Screen name="Loja" component={Store} options={{
        drawerIcon: ({ }) => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Loja.svg" />
        ),

      }} />
      <Drawer.Screen name="Sobre" component={AboutUs} options={{
        drawerIcon: ({ }) => (
          <SvgUri width="40" height="40" uri="https://atuousti.sirv.com/FCM/Sobre%20N%C3%B3s.svg" />
        ),
      }} />
    </Drawer.Navigator>

  );
}


export function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* <Stack.Screen name="Drawer" component={DrawerNavigation} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />


      <Stack.Screen name="Registo" component={Register} />

      <Stack.Screen name="Arts" component={Arts} />
      <Stack.Screen name="Art" component={Art} />
      <Stack.Screen name="Artist" component={Artist} />

      <Stack.Screen name="Present" component={Present} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="New" component={New} />

      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />

      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="Store" component={Store} />

      <Stack.Screen name="Error" component={Error} />

      <Stack.Screen name="AboutUs" component={AboutUs} />

      <Stack.Screen name="Menu" component={Menu} />


    </Stack.Navigator>
  )
}