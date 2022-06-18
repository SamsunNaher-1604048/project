import React,{useState} from 'react'
import { View, Text,StyleSheet,Modal,TextInput} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";

const Noteinput = ({visibal,onclose,onsubmit}) => {
  const[title,Settitle]=useState('')
  const[des,Setdes]=useState('')
  
  const Changetitle=(text)=>{
    Settitle(text)
  }

  const ChangeDes=(text)=>{
    Setdes(text)
  }

  const submit=()=>{
    if(title.trim() && des.trim()){
      onsubmit(title,des);//sanding value to mainScreen
      Settitle('')
      Setdes('')
      onclose()
    }
  }

  const close=()=>{
    Settitle('')
    Setdes('')
    onclose()
  }

  return (
    <Modal visible={visibal} animationType='slide'>
      <View style={styles.container}>
        <TextInput style={[styles.input,styles.title]} placeholder='Title' onChangeText={Changetitle} value={title}/>
        <TextInput multiline style={[styles.input,styles.des]} placeholder='Description' onChangeText={ChangeDes} value={des}/> 

        <View  style={styles.btncointainer}>
          <Icon name='checkcircle'  size={45} color='#dbb2ff' style={{marginRight:20}} onPress={submit}/>
          <Icon name='closecircle'  size={45} color='#dbb2ff'onPress={close}/>
        </View>

      </View>
    </Modal>
  )
}
const styles=StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingTop:15,
  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:'#dbb2ff',
    color:'#1e1e1e',
    fontSize:20,
  },
  title:{
    height:40,
    marginBottom:15,
    fontWeight:'bold',
  },
  des:{
    height:100,
  },
  btncointainer:{
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:15,
  }
})
export default Noteinput
