

import React from 'react';
import { TouchableOpacity, StyleSheet,Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { block } from 'react-native-reanimated';


const styles = StyleSheet.create({
  row: { 
    padding: 2,
    flexDirection:'row',
   },
   title:{
     color: '#fff',
     fontSize:'20',
     fontWeight:'bold',
     paddingLeft:10,
   },
   poster:{
     width:50,
     height:50,paddingLeft:'5%'
   }
});




const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() =>props.onSelectMovie(props)} >
    <Image source= {{uri:props.Poster}}
           style={styles.poster}
    />
    <Text style={styles.title} >{props.Title} ({props.Year})</Text>
    
  
  </TouchableOpacity>
);

export default Row;