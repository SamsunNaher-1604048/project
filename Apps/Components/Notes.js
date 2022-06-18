import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notes = ({data}) => {
  return (
    <View>
      <View style={styles.box}>
        <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
        <Text numberOfLines={3} style={styles.des}>{data.des}</Text>
      </View>
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
  box:{
    height:140,
    width:385,
    backgroundColor:'#dbb2ff',
    margin:10,
    padding:10,
    borderRadius:10,
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
  },
  des:{
    fontSize:17,

  }
})