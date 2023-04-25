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
<Text>Indíce: telacanal,telacursos</Text>

<Button
title='TelaCanal'
onPress={()=>navigation.navigate('Canal')}
/>



<Button
title='TelaCursos'
onPress={()=>navigation.navigate('Cursos')}
/>


</View>

  );
}

function TelaCanal({navigation}){
  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Canal</Text>
<Text>Indíce: telaHome</Text>



<Button
title='Voltar'
onPress={()=>navigation.navigate('Home')}
/>

</View>

  );
}

function TelaCursos({navigation}){
  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Tela Cursos</Text>



<Button
title='cursoReactNative'
onPress={()=>navigation.navigate('CursosReactNative',{aulas:100,autor:'Yuri'})}
/>



<Button
title='Voltar'
onPress={()=>navigation.goBack()}
/>

</View>

  );
}



function TelaCursosReactNative({route,navigation}){

  const {aulas}=route.params;
  const{autor}=route.params;

  return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text>Curso React Native</Text>
<Text>Aulas:{aulas}</Text>
<Text>Autor:{autor}</Text>



<Button
title='Voltar'
onPress={()=>navigation.goBack()}
/>

<Button
title='Home'
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


<Pilha.Screen
  name="Cursos"
  component={TelaCursos}
  options={{title:'Tela de Cursos'}}
  />

<Pilha.Screen
  name="CursosReactNative"
  component={TelaCursosReactNative}
  options={{title:'Curso de Reacat Native'}}
  />



  </Pilha.Navigator>
   </NavigationContainer>
 );
};