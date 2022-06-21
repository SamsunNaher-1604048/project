import { View, Text,StyleSheet,ScrollView,SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Search from '../Components/Search'
import Noteinput from '../Components/Noteinput';
import Notes from '../Components/Notes';


 const MainScreen=(props)=> {
     const [greet,Setgreet]=useState()
     const[model,setmodel]=useState(false)
     const [notes,setnotes]=useState([])

     useEffect(()=>{
       findgreet()
       getNotes()
     },[notes])

     const findgreet=()=>{
       const hrs = new Date().getHours()
       if(hrs===0||hrs<12) return Setgreet("MORNING")
       if(hrs===0||hrs<17) return Setgreet("AFTER NOON")
       Setgreet("EVENGING")
     }

     const getNotes=async()=>{
          const result=await AsyncStorage.getItem('notes')
          if(result!==null){
          setnotes(JSON.parse(result))
        }
      //AsyncStorage.clear()
      }

     const addnote=()=>{
       setmodel(true)
     }

     const shownote=async(title,des)=>{
       const time=new Date().getTime()
       const note={
         id:Date.now(),
         title:title,
         des:des,
         time:time
       };
       const updatenote=[...notes,note];
       setnotes(updatenote)
       await AsyncStorage.setItem('notes',JSON.stringify(updatenote))
     }

     
  return (
    <SafeAreaView>
      <View  style={styles.container}>
      <ScrollView >
        <Text style={styles.head}>GOOD {greet} {props.name} </Text>
        <Search />
        {notes.map((item)=><Notes key={item.id} data={item}/>)}
        <View style={styles.notestyle}>
          {!notes.length?(<Text style={styles.notes}>Add Note</Text>):null}
        </View>
        <Noteinput visibal={model} onclose={()=>{setmodel(false)}} onsubmit={shownote}/>
        <View style={styles.btncontainer}>
          <Icon name='plus-circle' size={60} color='#dbb2ff' style={styles.plus} onPress={addnote} />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
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
  },
  notes:{
    fontWeight:'bold',
    fontSize:30,
    opacity:.3,
  },
  notestyle:{
    justifyContent:'center',
    alignItems:'center'
  },
  btncontainer:{
    paddingTop:70,

  },
  plus:{
    position:'absolute',
    right:20,
    marginBottom:50
  },
})
export default MainScreen;  