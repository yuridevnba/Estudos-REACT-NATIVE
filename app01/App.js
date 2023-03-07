

import React from 'react';
import {Text, View,StyleSheet,SafeAreaView} from 'react-native';
import Estilo from './componentes/Estilos'
//import CxTx from  './componentes/CaixaTexto'
//import Rolagem from  './componentes/Rolagem'
import Toque from  './componentes/Toque'
import Modal from  './componentes/Modal'


export default function App1(){



return(
  <SafeAreaView style={Estilo.conteiner}>

    
 

  <View>
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>

   {/*<CxTx/>*/}

   {/*<Rolagem/>*/}

   {/*<Toque/>*/}

   <Modal/>


   
   </View>


</SafeAreaView>

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



