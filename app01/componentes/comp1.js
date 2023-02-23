import React from 'react';
import {Text} from 'react-native';
import Estilo from '../componentes/Estilos'



export default function(props){
    
return(


<Text style={Estilo.textoCursos}>CFB CUrsos - Curso de {props.curso}: Nota={props.nota}</Text>


)


}

