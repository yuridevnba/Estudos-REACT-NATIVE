

import React from 'react';
import {Text, View,StyleSheet,} from 'react-native';
import Estilo from './componentes/Estilos'
import Lp from './componentes/ListaPlana'


export default function App1(){

return(
  <View style={Estilo.conteiner}>

   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   <Lp/>
</View>

 );
};

const estilos = StyleSheet.create({
logo:{

  width:250,
  resizeMode:'contain'
}

})



