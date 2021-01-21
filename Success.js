import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
export default function Success() {
    return (
      <View >
       
       
      < TextInput
          style={{height: 40,borderWidth:3,width:200,textAlign:'center',marginLeft:780,marginBottom:20,}}
          placeholder="Username"
        
        />
  
        < TextInput
          style={{height: 40,borderWidth:3,width:200,textAlign:'center', Align:'center',marginLeft:780,marginBottom:20,}}
          placeholder="Password"
        />
        
        <StatusBar style="auto" />
      </View>
    );
        
  }
  
