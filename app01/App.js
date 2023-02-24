

import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
//import C1 from './componentes/comp1'
import Estilo from './componentes/Estilos'
import Caixas   from './componentes/Caixa'
//import { Component } from 'react/cjs/react.production.min';

/*
 pego os parâmetros e passo para o corpo da função.
(conjunto de parâmetros)=>{corpo, oq ela vai fazer}
n=>return n*2 === se tiver só 1 parâmetro não precisa usar ()

(n)=>{return n*2} não está associado a nenhum nome, então como chamar? inline ou associando a uma variável.
(n1,n2)=>{return n1+n2}

*/


   const triplo=n=>n*3



    const dobro =(n)=>{
    return n*2
  }

export default function App1(){

  let vexibir=true;
return(
  <View style={Estilo.conteiner}>


<Text>{triplo(2)}</Text>
   <Text>{dobro(2)}</Text>

   <Image
  source={require('./assets/logo.png')}
   style={estilos.logo}
   />

 
  
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   
</View>

 );
};

const estilos = StyleSheet.create({
logo:{

  width:100,
  resizeMode:'contain'
}

})



