import { StyleSheet,Modal,View ,Text,ScrollView ,SafeAreaView,Alert} from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Noteinput from '../Components/Noteinput';



const NoteDetail = ({visibal,note,onClose}) => {
  const[model,setmodel]=useState(false)

  const close=()=>{
    onClose()
   
  };

  const formatDate=(time)=>{
    const date = new Date(time);
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    const her=date.getHours();
    const min=date.getMinutes();
   return`${day}/${month}/${year}-${her}:${min}`;
  };

  const deleteNote=async()=>{
     const result= await AsyncStorage.getItem('notes');
     let notes=[]
     if(result!==null) {
      notes=JSON.parse(result)
     }
     const newnotes=notes.filter(n=> n.id!==note.id)
     await AsyncStorage.setItem('notes',JSON.stringify(newnotes))
     onClose()
  }

  const edit=()=>{
    setmodel(true)
  }



  const displaydeletealert=()=>{
    Alert.alert('Are You Sure!','This Acion Will Delete Note Permanently!',[
      {
        text:'Delete',
        onPress: deleteNote,
      },
      {
        text:'No Thanks',
        onPress:()=>{
        }
      }
    ])
  }

  const handleOnClose=()=>{
    setmodel(false)
  }
  const onHendelSubmit=()=>{
    
  }


  return (
    <SafeAreaView>
      <Modal visible={visibal}>
      <ScrollView style={styles.container}>
        <Text style={styles.time}>{`Created at:${formatDate(note.time)}`}</Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.des}>{note.des}</Text>
       <View style={styles.btncontainer}>
       <Icon name='closecircle'  size={45} color='#dbb2ff' onPress={close} style={styles.close}/>
       <Icon name='delete'  size={45} color='#dbb2ff' onPress={displaydeletealert} style={styles.close}/>
       <Icon name='edit'  size={45} color='#dbb2ff' onPress={edit}/>
       </View>
      </ScrollView>
      <Noteinput visibal={model} onclose={handleOnClose} note={note} isedit={true} onsubmit={onHendelSubmit}/>
    </Modal>
    </SafeAreaView>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container:{
    margin:15,
  },

  title:{
    fontWeight:'bold',
    fontSize:30,
    color:'#dbb2ff',
  },
  des:{
    fontSize:20,
    opacity:0.8,
  },
  time:{
    textAlign:'right',
    fontSize:12,
    opacity:0.6,
  },
  btncontainer:{
    marginTop:80,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:50,
    
  },
  close:{
    paddingRight:55
  },
})