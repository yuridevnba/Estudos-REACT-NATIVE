import React,{useState} from 'react';
import { View,Text,Button } from 'react-native';

// Componente Funcional, não é componente Classe.

export default function(props){


    const[ligado,setLigado]=useState(true)
    return(


        <View> 

        <Text>Carro:{props.nome} - Ligado:{ligado ? "Sim":"Não"}</Text>
       <Button
       
       title={ligado?'Desligar':'ligar'}
       onPress={
            ()=>{setLigado(!ligado)}

       }


       
       
       

      />


      </View>

    )
}
