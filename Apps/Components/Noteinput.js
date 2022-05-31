import { StyleSheet, Text, View ,Modal,TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/AntDesign";


const Noteinput = ({visible}) => {

    const [title,settitle]=useState('')
    const[des,setdes]=useState('')

    const changetitle=(text)=>{
        settitle(text)
    }

    const changedes=(text)=>{
        setdes(text)
    }

  return (
    <Modal  visible={visible} animationType='fade'>
        <View style={styles.container}>
            <TextInput value={title} onChangeText={changetitle} placeholder='Title' style={[styles.input,styles.title]}/>
            <TextInput value={des} onChangeText={changedes}   multiline  placeholder='Note' style={[styles.input,styles.des]}/>  
            <View style={styles.icon}>
                <Icon name='checkcircle' size={50} color='#dbb2ff'/>
                <Icon name='closecircle' size={50}  color='#dbb2ff' />
            </View>
        </View>      
    </Modal>
  )
}

export default Noteinput

const styles = StyleSheet.create({

    container:{
        paddingHorizontal:20,
        marginTop:20,
        
    },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'#dbb2ff',
        fontSize:20,
        color:'#1e1e1e',
    },
    title:{
         height:40,
         marginBottom:15,
         fontWeight:'bold',
    },
    des:{
    height:100,
    },
})