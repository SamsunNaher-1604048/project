import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Search here......'/>
    </View>
  )
}
const styles=StyleSheet.create({
    input:{
        borderWidth:0.8,
        borderColor:'#dbb2ff',
        height:40,
        borderRadius:15,
        marginTop:10,
        fontSize:20,
    }

})