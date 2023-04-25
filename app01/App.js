/* eslint-disable prettier/prettier */


import React,{Component} from 'react';
import {Text, View,StyleSheet, Button} from 'react-native';
import Estilo from './componentes/Estilos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Pilha=createStackNavigator();

function TelaHome({navigation}){

  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Home</Text>
<Text>curso react-native</Text>

<Button
title='TelaCanal'
onPress={()=>navigation.navigate('Canal')}
/>


</View>

  );
}

function TelaCanal({navigation}){
  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Canal</Text>
<Text>Universidade Católica de PE</Text>

<Button
title='Home'
onPress={()=>navigation.goBack()}
/>



<Button
title='Voltar'
onPress={()=>navigation.navigate('Home')}
/>

</View>

  );
}

export default function App1(){

return (

   <NavigationContainer>
  <Pilha.Navigator initialRouteName='TelaHome'>

  <Pilha.Screen
  name="Home"
  component={TelaHome}
  options={{title:'Tela Inicial'}}
  />


<Pilha.Screen
  name="Canal"
  component={TelaCanal}
  options={{title:'Tela Canal'}}
  />


  </Pilha.Navigator>
   </NavigationContainer>
 );
};