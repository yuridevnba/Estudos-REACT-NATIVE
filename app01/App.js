

import React from 'react';
import {Text,View} from 'react-native';
//import C1 from './componentes/comp1'
import Estilo from './componentes/Estilos'
import Caixas   from './componentes/Caixa'
//import { Component } from 'react/cjs/react.production.min';

const fexibir =(vp1)=>{
  if(vp1){
    return(<Text>Curso de React Native</Text>)
  }else{
    return(<Text>---</Text>)
  }
}

export default function App1(){

  let vexibir=true;
return(
  <View style={Estilo.conteiner}>

 <Caixas exibir={vexibir}/>
  
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   {fexibir?<Text>Curso de React Native</Text>:<Text>---</Text>}
   {fexibir &&<Text>Curso de React Native</Text>}
</View>

 );
};



