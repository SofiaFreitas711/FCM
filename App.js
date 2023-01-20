import 'react-native-gesture-handler';
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Router } from './src/routes/router'
import {AuthStack} from './src/routes/AuthStack'

import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>

  )
}