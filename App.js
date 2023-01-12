import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

import HomePage from './src/screen/HomePage.js';
import Menu from './src/screen/Menu.js';
import Onboarding from './src/screen/Onboarding.js';
import AboutUs from './src/screen/AboutUs.js';
import Arts from './src/screen/Arts/Arts.js';
import Art from './src/screen/Arts/Art.js';
import Artist from './src/screen/Arts/Artist.js';
import Login from './src/screen/Authenticate/Login.js';
import Register from './src/screen/Authenticate/Register.js';
import Games from './src/screen/Games/Games.js';
import Game from './src/screen/Games/Game.js';
import Leaderbord from './src/screen/Games/Leaderbord.js';
import Present from './src/screen/News/Present.js';
import Events from './src/screen/News/Events.js';
import Event from './src/screen/News/Event.js';
import News from './src/screen/News/News.js';
import New from './src/screen/News/New.js';
import Profile from './src/screen/Profile/Profile.js';
import EditProfile from './src/screen/Profile/EditProfile.js';
import Store from './src/screen/Store.js';

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="HomePage"component={HomePage}/>
      <Stack.Screen name="Menu"component={Menu}/>
      <Stack.Screen name="Onboarding"component={Onboarding}/>
      <Stack.Screen name="AboutUs"component={AboutUs}/>
      <Stack.Screen name="Arts"component={Arts}/>
      <Stack.Screen name="Art"component={Art}/>
      <Stack.Screen name="Artist"component={Artist}/>
      <Stack.Screen name="Login"component={Login}/>
      <Stack.Screen name="Register"component={Register}/>
      <Stack.Screen name="Games"component={Games}/>
      <Stack.Screen name="Game"component={Game}/>
      <Stack.Screen name="Leaderbord"component={Leaderbord}/>
      <Stack.Screen name="Present"component={Present}/>
      <Stack.Screen name="Events"component={Events}/>
      <Stack.Screen name="Event"component={Event}/>
      <Stack.Screen name="News"component={News}/>
      <Stack.Screen name="New"component={New}/> */}
      <Stack.Screen name="Profile"component={Profile}/>
      {/* <Stack.Screen name="EditProfile"component={EditProfile}/>
      <Stack.Screen name="Store"component={Store}/> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;