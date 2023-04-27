/* eslint-disable prettier/prettier */


import React,{Component} from 'react';
import {Text, View,StyleSheet, Button} from 'react-native';
import Estilo from './componentes/Estilos';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Guias = createBottomTabNavigator();

function TelaHome({navigation}){

      return (

     // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

           <Text>Tela Home</Text>
           <Text>Indíce: telacanal,telacursos</Text>
     </View>

  );
}

function TelaCanal({navigation}){
       return (

     // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

          <Text>Tela Canal</Text>
          <Text>Indíce: telaHome</Text>

      </View>

  );
}

  function TelaCursos({navigation}){
        return (

       // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

      <Text>Tela Cursos</Text>

       </View>

  );
}


export default function App1(){

     return (

      <NavigationContainer>
      <Guias.Navigator initialRouteName="TelaHome">

      <Guias.Screen
      name="Home"
      component={TelaHome}
      options={{
      title:'Tela Inicial',
      headerStyle:{
      backgroundColor:'#008',
  },
      headerTintColor:'#fff',
      headerRight:()=>(

   <Button

     title="CURSOS"
     color="#000"
     onPress={()=>alert('Botão CUrsos Clicado')}

    />
    ),
    }}
    />


  <Guias.Screen
    name="Canal"
    component={TelaCanal}
    options={{
    title:'Tela Canal',
    headerStyle:{
    backgroundColor:'#008',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',

    },
    }}

  />


  <Guias.Screen
   name="Cursos"
   component={TelaCursos}
  options={{title:'Tela de Cursos'}}
  />

  </Guias.Navigator>
   </NavigationContainer>
 );
}
