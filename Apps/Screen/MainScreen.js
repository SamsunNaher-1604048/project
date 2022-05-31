import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";


import Search from '../Components/Search'
import Noteinput from '../Components/Noteinput';

 const MainScreen=(props)=> {
     const [greet,Setgreet]=useState()

     useEffect(()=>{
       findgreet()
     },[])

     const findgreet=()=>{
       const hrs = new Date().getHours()
       if(hrs===0||hrs<12) return Setgreet("MORNING")
       if(hrs===0||hrs<17) return Setgreet("AFTER NOON")
       Setgreet("EVENGING")

     }

     const addnote=()=>{
       console.log('click')
     }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>GOOD {greet} {props.name} </Text>
      <Search />
      <View style={styles.notestyle}>
        <Text style={styles.notes}>Add Note</Text>
        <Icon name='plus-circle' size={60} color='#dbb2ff' style={styles.plus} onPress={addnote} />
      </View>
      <Noteinput visible={true}/>
    </View>
  )
}
const styles=StyleSheet.create({
  head:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:10
  },
  container:{
    marginHorizontal:10,
    flex:1
  },
  notes:{
    fontWeight:'bold',
    fontSize:30,
    opacity:.3,
  },
  notestyle:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  },
  plus:{
    position:'absolute',
    right:20,
    bottom:50
  }


})
export default MainScreen;  