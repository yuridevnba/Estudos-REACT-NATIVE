/*import React,{useState} from 'react'
import { View,Text,ScrollView,RefreshControl } from 'react-native'

export default function(){

    const [atualizando,setAtualizando]=useState(false)
    function aoAtualizar(){
        setAtualizando(true);
        // código de atualização, rotina e tals.
    setTimeout(() => {
      setAtualizando(false);
    }, 3000);
    }
  return (
         

        <View style={{flex:1}}>
        <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{backgroundColor: '#333', padding: 15}}
         refreshControl={
         <RefreshControl
          refreshing={atualizando}
          onRefresh={aoAtualizar}
         />
        
        }
         
         
         >
        
        <Text style={{color:'#eee'}}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam non hendrerit felis.
          Aliquam vitae fringilla nisl. Quisque imperdiet nisi et semper
          tristique. Quisque sit amet dapibus dolor, blandit molestie risus.
          Aliquam placerat sit amet lorem et convallis. Maecenas efficitur
          mattis ex a laoreet. Integer vitae pellentesque purus. Praesent
          vestibulum odio sed lacinia placerat. Maecenas tempor tortor velit,
          nec mollis turpis sodales non. Pellentesque eu lorem hendrerit enim
          placerat lobortis. Fusce accumsan rhoncus massa eget egestas.
          Suspendisse sit amet enim sapien. Mauris elit turpis, faucibus sed
          pellentesque non, vehicula ut augue. Nullam nec maximus justo, in
        in mollis massa. Cras convallis eleifend.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat, ipsum eu fermentum elementum, tellus ipsum porta dui, in facilisis ipsum tellus non magna. Vivamus lacus sem, efficitur vel faucibus vitae, rhoncus quis purus. Nulla mattis lorem sed velit posuere, ac aliquet nisi pretium. Sed molestie magna lacus, eget mattis nibh semper id.
         Nunc pellentesque augue eget quam scelerisque, eu faucibus nulla porttitor. Quisque suscipit tortor quis varius auctor. Donec congue congue massa non bibendum. Proin et urna est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget interdum neque. Curabitur et pretium massa.

Praesent id lorem in magna mattis venenatis. Phasellus nisl dolor, tincidunt ut sem et, fermentum dignissim eros.
 Integer urna nibh, fermentum quis dui at, cursus sagittis velit. Nunc non finibus sem. Proin ante tellus, tincidunt ac lorem bibendum, tincidunt facilisis lectus. Fusce faucibus elit vitae diam vestibulum varius. Fusce nec nisi libero. Nam ornare malesuada ultrices. Vestibulum a leo velit. Aliquam consectetur tellus placerat nunc dictum, id scelerisque urna tempus. Nam convallis velit sit amet nunc mollis varius. Vivamus vel arcu facilisis, porta lacus non, consequat mi. Suspendisse tristique sed ante vel vestibulum. In feugiat tempor dignissim. Nullam ut enim vel enim vestibulum pulvinar. Quisque magna diam, ornare non tortor vitae, facilisis condimentum dolor.

Cras convallis erat nec ante tincidunt lacinia. Aenean mattis tortor ac eros dictum placerat. Duis eros ex, blandit interdum orci vel, 
convallis fringilla nibh. Pellentesque at varius libero. Sed vehicula porttitor viverra. Fusce ut cursus sapien. Nam porttitor pellentesque neque, sit amet consectetur magna condimentum nec.

Duis eget augue ligula. Curabitur eu eleifend orci. Integer dignissim velit ultricies risus ornare, ut gravida mi egestas. Vestibulum bibendum lacus sit 
amet nisi vestibulum, quis efficitur nibh blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla volutpat, tellus eu porta lacinia, ligula neque elementum purus, vitae rhoncus enim quam ut quam. Nunc a imperdiet ex, sit amet suscipit enim. Nullam quis tellus lacinia, tempor magna vel, placerat libero. Integer vel orci at elit placerat interdum nec et enim. Nunc tempor dui vel diam varius tempus. Nunc vel congue sem. Curabitur condimentum eu ante sed placerat. Morbi pulvinar risus lacus, ac suscipit mauris gravida at.

Vestibulum sagittis erat euismod sapien molestie tempus quis vel sapien. Fusce erat est, ullamcorper vitae iaculis lacinia, pretium nec quam. Pellentesque diam 
tortor, volutpat sit amet purus a, semper varius velit. Quisque facilisis, arcu non condimentum vehicula, tortor enim tincidunt urna, scelerisque vehicula ante nunc ut ligula. Maecenas id consequat enim, at semper metus. Pellentesque eget velit convallis, posuere tortor eget, fringilla elit. Aenean metus ante, cursus id condimentum vitae, lobortis quis tortor. Quisque fermentum dolor leo, eu finibus eros suscipit ut. In volutpat ante ac nibh aliquet, eu luctus purus ornare. Integer accumsan purus vitae condimentum placerat. Nulla ligula ex, sollicitudin et laoreet eget, commodo eget est. Nam pellentesque varius volutpat. Nulla faucibus pharetra sem pellentesque rhoncus. Integer et leo ut elit efficitur euismod.
 Orci varius natoque penatibus.

        </Text>

        </ScrollView>

        </View>




    )
}*/
import React,{useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Button,TextInput } from 'react-native';

export default function App() {

  const [palavra, setPalavra] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };


  return (
    <View style={styles.container}>
    
    <View style={styles.containerinput}>

     <TextInput
         style={styles.input}
          placeholder="digite aqui "
         value={palavra}
        
        onChangeText={palavra=>setPalavra(palavra)}
        
        autoCapitalize="character" 
         />
          </View>

          <View style={styles.containersquare}>


      <Text style={styles.text}>{palavra}: {count}</Text>

      <View style={styles.buttons}>

        <Button style={styles.button} title="somar" onPress={increment}/>

          

        

        <Button style={styles.button} title="cancelar" onPress={reset}/>

          

        

        <Button style={styles.button}title="diminuir" onPress={decrement}/>


        

     
</View>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

  containerinput: {
   
    /*width:"100%",
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection:'row',*/
   },
  
  container: {
     flex:1,
    backgroundColor: '#708090',
    
    width:"100%",
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop:20,
     marginHorizontal: 'auto',
   },

  square: {
    //flex:1/2,
    marginTop:150,
    width: '80%',
    height: '25%',
    backgroundColor: '#eee',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
     marginHorizontal: 'auto',
      //top:200
  },

  input:{
    
   borderWidth:3,
   borderColor:'blue',
   padding:10,
   //height:10,
   width:200,
   //bottom:250
   marginBottom:150
   
  
  
   
   },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    marginTop: -80,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});