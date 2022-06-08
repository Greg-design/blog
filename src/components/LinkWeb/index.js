import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

// webview q vamos utilizar é pra abrir um navegador dentro do app
// expo install react-native-webview

import { WebView } from 'react-native-webview'

export default function LinkWeb({link, title, closeModal}) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Feather name="x" size={25} color='white' />
        <Text style={styles.name}>{title}</Text>
      </TouchableOpacity>
      
      <WebView 
        source={{ uri: link}}
      />
    </>
  );
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor:'#232630',
        marginTop:60,
        flexDirection:'row',
        alignItems:'center',
    },
    name:{
        color: '#fff',
        marginLeft:8,
        fontSize:18,
        fontWeight:'bold'
    }
});
