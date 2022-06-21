import { StyleSheet,Modal,View ,Text,ScrollView ,SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";



const NoteDetail = ({visibal,note,onClose}) => {

  const close=()=>{
    onClose()
  }

  const formatDate=(time)=>{
    const date = new Date(time);
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    const her=date.getHours();
    const min=date.getMinutes();
   return`${day}/${month}/${year}-${her}:${min}`;
  };


  return (
    <SafeAreaView>
      <Modal visible={visibal}>
      <ScrollView style={styles.container}>
        <Text style={styles.time}>{`Created at:${formatDate(note.time)}`}</Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.des}>{note.des}</Text>
       <View style={styles.btncontainer}>
       <Icon name='closecircle'  size={45} color='#dbb2ff' onPress={close} style={styles.close}/>
       <Icon name='delete'  size={45} color='#dbb2ff' style={styles.close}/>
       <Icon name='edit'  size={45} color='#dbb2ff'/>
       </View>
      </ScrollView>
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
    
  },
  close:{
    paddingRight:55
  },
})