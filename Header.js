import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default function Header(){
  return (
<View style={styles.container}>
  <Text style={styles.headerText}>WELCOME</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    padding: 24,
  },
  headerText: {
    fontSize:50,
    
    marginBottom:20,
    textAlign:"center"
  },
  logo: {
    height: 280,
    width: 200,
  }
});