

import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
//import C1 from './componentes/comp1'
import Estilo from './componentes/Estilos'
import Caixas   from './componentes/Caixa'
//import { Component } from 'react/cjs/react.production.min';

  

export default function App1(){

  let vexibir=true;
return(
  <View style={Estilo.conteiner}>

   <Image
   source={require('./assets/logo.png')}
   style={estilos.logo}
   />

 <Caixas exibir={vexibir}/>
  
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   
</View>

 );
};

const estilos = StyleSheet.create({
logo:{

  width:100,
  resizeMode:'repeat'
}

})



