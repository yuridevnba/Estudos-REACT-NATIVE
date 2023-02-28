import React,{useState} from 'react';
import { View,Text,Switch} from 'react-native';

// Componente Funcional, não é componente Classe.

export default function(props){


    const[ligado,setLigado]=useState(true)

    const toggleLigado=()=>setLigado(!ligado)
    //const togglelLigado=()=>setLigado(previousState =>!previousState)
    return(


        <View> 

        <Text>Carro:{props.nome} - Ligado:{ligado ? "Sim":"Não"}</Text>
       <Switch
       
        trackColor={{false:'#777',true:'#3bf'}}
        thumbColor={ligado?'#00f':'#444'}

        value={ligado}
       
        onValueChange={
         
          (toggleLigado)

        }
       

      />


      </View>

    )
}
