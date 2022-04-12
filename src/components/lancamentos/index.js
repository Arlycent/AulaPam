import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';



export default function Jogos({titulo,data,imagem}){
return(
    
    <TouchableOpacity style={estilo.containerLancamento}>

        <Image style={estilo.images} source ={require(`../../imagens/${imagem}`)} />
        <Text style ={estilo.titulo}>{titulo} </Text> 
        <Text style ={estilo.data}>{data} </Text>
        
       
       
    </TouchableOpacity>

);
}
const estilo = StyleSheet.create({

    containerLancamento:{
        borderRadius:10,
        marginTop:8,
        padding:10,
        margin:2,
        alignItems:'center',
        marginLeft:8

    },
    titulo:{
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        
    },
    data:{
        color:'green',
        fontSize:12,
        marginLeft:200,
        marginTop:2,
        fontWeight:'bold',

    },
    images:{
      width:300,
      height:200,
      borderRadius:12,
      
    }
}

)