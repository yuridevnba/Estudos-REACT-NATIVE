import React from 'react';
import {Text, View,FlatList,StyleSheet} from 'react-native';

const produtos=[
{
id:'001',
desc:['Mouse','25.00']
},
{
    id:'002',
    desc:['Teclado','50.00']
    },
    {
        id:'003',
        desc:['Monitor','430.00']
        },

    
        {
            id:'003',
            desc:['Violão','5052.00']
            },
            {
                id:'004',
                desc:['Sofá','4350.00']
                },










]

export default function (){

return(
  <View >

<FlatList
data={produtos}
keyExtractor={item=>item.id}
renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text></View>}



/>
  
   
</View>

 );
};



const estilos=StyleSheet.create({

    item:{
        backgroundColor:'#008',
        padding:15,
        marginVertical:8,
        marginHorizontal:16
    },
    
    prod:{
        fontSize:10,
        color:'#fff'




    }

})