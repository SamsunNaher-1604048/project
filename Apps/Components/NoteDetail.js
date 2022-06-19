import { StyleSheet,Modal,View ,Text} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";


import Notes from './Notes'


const NoteDetail = ({visibal,note,onClose}) => {

  const close=()=>{
    onClose()
  }

  return (
    <Modal visible={visibal}>
      <Text>{note.title}</Text>
      <Text>{note.des}</Text>
      <Icon name='closecircle'  size={45} color='#dbb2ff' onPress={close}/>
    </Modal>
  )
}

export default NoteDetail

const styles = StyleSheet.create({})