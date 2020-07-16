import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import {getDetails} from '../Api'
 


export default class MovieDetailsScreen extends React.Component{
 state = {
     movie:[],
 }

 componentDidMount(){
getDetails(this.props.route.params.imdbID)
.then((movie) => this.setState({movie}))
console.log(this.state.movie)
 }    
    render(){
        console.log(this.state.movie)
        return(
            <View style= {styles.container}>
            <View style={styles.topDetails}>
            <Image source= {{uri:this.state.movie.Poster}}
                style={{width:200,height:200}}
           />
           <View style={styles.words}>
           <View style={styles.column}>
           <View style={styles.row} >
           <Text style={styles.text}>Genre: {this.state.movie.Genre}</Text>
           </View>
           <View style={styles.row}>
           <Text style={styles.text}>Year:{this.state.movie.Year}   </Text>
           <Text style={styles.text}>imdbRating:{this.state.movie.imdbRating}</Text>
           </View>
           </View>
           <View style={styles.column}>
         
           <Text style={styles.text}>Runtime: {this.state.movie.Runtime }</Text>
           <Text style={styles.text}>Director: {this.state.movie.Director}</Text>
           
            
            </View>
          <View style={styles.column}>
           <Text style={styles.text} >Actors: {this.state.movie.Actors}</Text>
           </View>
           </View>
           </View>
            <Text style={styles.text}>Summary: {this.state.movie.Plot}</Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    
},
topDetails:{
    flexDirection:'row',
    paddingBottom:10,
},
row:{
    flexDirection:'row',
},
column:{
    flexDirection:'column',
},
words:{
    flex:1,
},
text:{
    color:'#fff',
    paddingBottom:5,
}
});