import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomePage from './src/pages/HomePage.js';
import Menu from './src/pages/Menu.js';
import Onboarding from './src/pages/Onboarding.js';
import AboutUs from './src/pages/AboutUs.js';
import Arts from './src/pages/Arts/Arts.js';
import Art from './src/pages/Arts/Art.js';
import Artist from './src/pages/Arts/Artist.js';
import Login from './src/pages/Authenticate/Login.js';
import Register from './src/pages/Authenticate/Register.js';
import Games from './src/pages/Games/Games.js';
import Game from './src/pages/Games/Game.js';
import Present from './src/pages/News/Present.js';
import Events from './src/pages/News/Events.js';
import Event from './src/pages/News/Event.js';
import News from './src/pages/News/News.js';
import New from './src/pages/News/New.js';
import Profile from './src/pages/Profile/Profile.js';
import EditProfile from './src/pages/Profile/EditProfile.js';
import Store from './src/pages/Stores/Store.js';
import Roulette from './src/pages/Stores/Roulette.js';

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage"component={HomePage}/>
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
      <Stack.Screen name="Present"component={Present}/>
      <Stack.Screen name="Events"component={Events}/>
      <Stack.Screen name="Event"component={Event}/>
      <Stack.Screen name="News"component={News}/>
      <Stack.Screen name="New"component={New}/>
      <Stack.Screen name="Profile"component={Profile}/>
      <Stack.Screen name="EditProfile"component={EditProfile}/>
      <Stack.Screen name="Store"component={Store}/>
      <Stack.Screen name="Roulette"component={Roulette}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;