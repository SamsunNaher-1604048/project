import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";


const Round = ({onPress}) => {
  return (
    <Icon name='arrow-circle-right' size={60} color='#dbb2ff' style={styles.arrow} onPress={onPress}/>
  );
};

const styles=StyleSheet.create({
  arrow:{
    marginTop:10,
  }
});

export default Round;