import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NoteDetail from './NoteDetail'

const Notes = ({data}) => {
  const[notedetail,setnotedetail]=useState(false);

  const press=()=>{
    setnotedetail(true)
  }

  return (
    
     <View>
       <View>
          <TouchableOpacity onPress={press}>
            <View style={styles.box}>
              <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
              <Text numberOfLines={3} style={styles.des}>{data.des}</Text>
              <NoteDetail visibal={notedetail} note={data} onClose={()=>{setnotedetail(false)}}/>
          </View> 
        </TouchableOpacity>
      </View>
    </View>
 )
}



const styles = StyleSheet.create({
  box:{
    height:130,
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

  },
})
export default Notes;