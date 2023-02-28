

import React,{useState} from 'react';
import {Text, View,StyleSheet,Button} from 'react-native';
import Estilo from './componentes/Estilos'





export default function App1(){

const[ligado,setLigado]=useState(false)

return(
  <View style={Estilo.conteiner}>

    <Button
    title={ligado?"Desligar":"Ligar"}
    onPress={()=>setLigado(!ligado)}// se ele for false vai passar para true e vice-versa.
    />
  
  {ligado?
 

  <View>
   <Text style={Estilo.textoPadrão}>Yuri SIlva</Text>
  
   <Text style={Estilo.textoTitulo}>Unicap.br</Text>
   
   </View>
 :
 <Text>***</Text>
}
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



