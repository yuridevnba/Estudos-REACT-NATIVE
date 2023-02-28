

import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import Estilo from './componentes/Estilos'
import CarroC from  './componentes/CarroC'
import CarroF from  './componentes/CarrosF'




export default function App1(){



return(
  <View style={Estilo.conteiner}>

    
 

  <View>
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   <CarroC nome="Golf"/>
   <CarroC nome="HRV"/>

   <CarroF nome="Fit"/>
   <CarroF nome="Polo"/>
   
   </View>


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



