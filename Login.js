import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions'

//import Login from 'Login.js' 

export default class Login extends React. Component {
  render(){
  return (
    <View style={styles.container} >
     

    < TextInput
        style={{height: 40,borderWidth:3,width:200,textAlign:'center',marginLeft:780,marginBottom:20,}}
        placeholder="Username"
      
      />

      < TextInput
        style={{height: 40,borderWidth:3,width:200,textAlign:'center', Align:'center',marginLeft:780,marginBottom:20,}}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {this.props.navigation.navigate('Success')}  }>
        <Text style={styles.paragraph}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
  }
      
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