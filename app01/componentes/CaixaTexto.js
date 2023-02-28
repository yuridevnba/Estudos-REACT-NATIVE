import React,{useState} from 'react'
import { View,TextInput,Text } from 'react-native'



export default function(){

    const [nome,setNome]=useState("")
    
    return(

          <View>

            <Text>Digite seu nome:</Text>

         <TextInput
         style={{borderWidth:1,borderColor:'#000'}}
         
         value={nome}
        // onChangeText={(text)=>(setNome(text))}
        onChangeText={text=>setNome(text)}
        multiline="true" // elemento de texto que tem diversas linhas.
        autoCapitalize="characters" // tudo maiúsculo, words só a primeira letra maiúsculo.
         />
          <Text>Valor digitado:{nome}</Text>
          </View>


    )
}