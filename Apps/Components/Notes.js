import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import NoteDetail from '../Screen/NoteDetail'

const Notes = ({data}) => {
  const[notedetail,setnotedetail]=useState(false);

  const press=()=>{
    setnotedetail(true)
  }

  return (
    
     <ScrollView>
       <View>
          <TouchableOpacity onPress={press}>
            <View style={styles.box}>
              <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
              <Text numberOfLines={3} style={styles.des}>{data.des}</Text>
              <NoteDetail visibal={notedetail} note={data} onClose={()=>{setnotedetail(false)}}/>
          </View> 
        </TouchableOpacity>
      </View>
    </ScrollView>
 )
}



const styles = StyleSheet.create({
  box:{
    height:130,
    width:385,
    backgroundColor:'#dbb2ff',
    margin:10,
    padding:10,
    borderRadius:15,
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
  },
  des:{
    marginTop:8,
    fontSize:17,

  },
})
export default Notes;