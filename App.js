import React,{useEffect,useState}  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
} from 'react-native';

import Intro from './Apps/Screen/Intro';
import MainScreen from './Apps/Screen/MainScreen';



const App=()=>{
  const[name,setNane]=useState(null)
  

  useEffect(()=>{
    founduser()
    //AsyncStorage.clear(); 
  },[]);
  
  const founduser=async()=>{
    const value = await AsyncStorage.getItem("username");
    if(value!==null){
      setNane(value)
    }
  };

   if(name==null) return <Intro userfound={founduser}/>;
    return <MainScreen name={name}/>;
};

export default App;
