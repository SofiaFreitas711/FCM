import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

function App() {
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
}

export default App;
