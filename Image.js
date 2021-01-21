import React,{Component}from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default function DisplayImage () {
    return(
       <View style={styles.container}>
          <Image
            style={{
              resizeMode: "",
              height: 150,
              width: 350,
              marginBottom:30,
              marginLeft:80,
              alignSelf: 'center',
           
            }}
            source={require("../assets/bugatti-veyron-mansory-0dc2.jpg")}
          />
        </View>
         );
  }
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00FFFF',
      padding: 24,
    },
    loginText: {
      fontSize:30,
      marginLeft:780
    },
    logo: {
      height: 280,
      width: 200,
    }
  });
  
