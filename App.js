import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import Login from './components/Login.js' ;
import Header from './components/Header.js';
import Picture from './components/Image.js'
import Success from './components/Success.js'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
const RootStack = createStackNavigator(
  {
    Login: Login,
    Success: Success    ,
    
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);
export default function App() {
  return (
    <View>
   <Header/>
   <Picture/>
   <Login/> 

  
    </View>
  );
  
}

var switchContainer = createSwitchNavigator({
  Login:Login,
  Success:Success
})

