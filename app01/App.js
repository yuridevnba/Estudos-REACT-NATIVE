/* eslint-disable prettier/prettier */


import React,{useState} from 'react';
import {Text, View,StyleSheet,SafeAreaView,StatusBar,Button} from 'react-native';
import Estilo from './componentes/Estilos'
//import CxTx from  './componentes/CaixaTexto'
/*import Rolagem from  './componentes/Rolagem'*/
/*import Toque from  './componentes/Toque'*/
/*import Modal from  './componentes/Modal'*/


export default function App1(){

const[cor,SetCor]=useState("black")

const mudaCor=(c)=>{SetCor(c)}

return(

  <SafeAreaView style={Estilo.conteiner}>

    <StatusBar 
    backgroundColor={cor}
    barStyle='light-content'
    hidden={false}
    animated={true}
    translucent={true}

      />

  <View>
   <Text style={Estilo.textoPadrão}>Yuri Silva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>


    <Button
   title="Vermelho"
   onPress={()=>{SetCor("red")}}
    />

   <Button
   title="Azul"
   onPress={()=>{mudaCor("blue")}}
    />


   <Button
   title="Verde"
   onPress={()=>{mudaCor("green")}}
    />






   {/*<CxTx/>*/}

   {/*<Rolagem/>*/}

   {/*<Toque/>*/}

   {/*<Modal/>*/}


   
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



