import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { 
  View,Text,StyleSheet,TextInput,Dimensions} from 'react-native';
  
import Round from '../Components/Round';

const Intro=({onClick})=>{
    const[user,setuser]=useState('');

    const onchange=(text)=>{
        setuser(text);
        
    }

    const submit=async()=>{
       await AsyncStorage.setItem("username",user)
       onClick(user)
    }


    return(

            <View style={styles.container}>
                <Text style={styles.inputtitle}>Enter your name to continue</Text>
                <TextInput value={user} onChangeText ={onchange} placeholder='Enter Name' style={styles.textinput}/>
                {user.trim().length>=3 ?(<Round onPress={submit}/>):null}

            </View>

          

    );
};

const width = Dimensions.get("window").width-50;
const styles=StyleSheet.create({
    container:{
        paddingTop: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput:{
        borderWidth:3,
        borderColor:'#dbb2ff',  
        width,
        color:'#dbb2ff',
        height: 40,
        borderRadius:10,   
        paddingLeft:15,
        fontSize:20,

    },
    inputtitle:{
        alignSelf: 'flex-start',
        paddingLeft: 30,
        marginBottom:7,
        fontSize:20,
        color: '#dbb2ff',
    },

    arrow:{
        marginTop:10,
      }
});

export default Intro;