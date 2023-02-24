

import React from 'react';
import {Text, View,StyleSheet,ImageBackground} from 'react-native';
import Estilo from './componentes/Estilos'
import Lp from './componentes/ListaPlana'

const imgbg1='./assets/tela.jpg'
const imgbg2='./assets/R.jpg'

export default function App1(){

return(
  <View style={Estilo.conteiner}>

  <ImageBackground
  source={require(imgbg1)}
  style={estilos.imagemFundo}
  
  >

  <View>
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>
   
   </View>
  {/*<Lp/>*/} 
   </ImageBackground>
</View>

 );
};

const estilos = StyleSheet.create({
logo:{

  width:250,
  resizeMode:'contain'
},
imagemFundo:{
  flex:1,
  resizeMode:"cover",
  width:"100%"

}

})



