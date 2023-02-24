

import React from 'react';
import {

  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Alert


} from 'react-native';
import Estilo from './componentes/Estilos'
import Caixas   from './componentes/Caixa'





  
  

export default function App1(){

  let vexibir=true;
return(
  <View style={Estilo.conteiner}>

<Button
title="Mostrar mensagem"
onPress={()=>Alert.alert('MSG','Olá, Bom Dia Bença!!!')
}
/>


   <Image
  source={require('./assets/logo.png')}
   style={estilos.logo}
   />

 
  {vexibir?<Text>Curso de React Native</Text>:<Text>cfbcursos.com.br</Text>}
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   
</View>

 );
};

const estilos = StyleSheet.create({
logo:{

  width:250,
  resizeMode:'contain'
}

})



