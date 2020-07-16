import React from 'react';
import { Button,FLatList ,TextInput, Text, View, FlatList,StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {searchMovie }from '../Api'
import Row from '../Row';




export default class MovieSearchScreen extends React.Component{
   

    constructor(props){
    super(props);
    this.state={
    search:"",
    movies:[],
    page:1,
    }
}




handleChangeText = (search) => {
    this.setState({search});
    
  
    
}


handleSearch = async() => {
    try{
       
        const result = await searchMovie(this.state.search.trim(),this.state.page);
        this.setState(prevState =>({
            movies:result.movies,
        }))
        console.log(JSON.stringify(this.state.movies));
    }catch(err){
        console.error(err.message)
        
    }
};

handlePageEnd = async() =>{
   
        const result = await searchMovie(
            this.state.search,
            this.state.page +1,
            );
        this.setState({
            movies:[...this.state.movies, ...result.movies],
            page: this.state.page +1,
        });  
};

handleSelectMovie = movie => {
this.props.navigation.push("MovieDetails", movie);
};

listSeperator =() =>{
return(
    <View 
    style={{
        height:.5,
        width:'100%',
        backgroundColor:'#808080'
    }}

    />
);
}

emptyList = () => {
    return(
        <Text
        style={{
           fontWeight:'bold',
           fontSize:30,
    
            color:'#fff',

        }}>No Results...</Text>
    );
}

render(){
return(
<View style = {{flex: 1}}>
<View  style={styles.search}>
<TextInput 
placeholder ="Search Movies"
value = {this.state.search}
style={styles.input}
onChangeText ={this.handleChangeText}
/>

<Button 
title=">" 
style={styles.button}
onPress={this.handleSearch} 
disabled={this.state.search.length < 3} 

/>
</View>
<FlatList  
ListEmptyComponent ={this.emptyList}
    data = {this.state.movies}
    renderItem = {({ item }) => <Row {...item} onSelectMovie={this.handleSelectMovie} />}
    onEndReached ={() => this.handlePageEnd()}
    onEndReachedThreshold = {0.5}
    ItemSeparatorComponent={this.listSeperator}

/>

</View>



)
}


}

const styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        width:'100%'
    },
    input:{
        backgroundColor:'#fff',
        width:'95%',
    },
    button:{
        paddingRight:0,
    },


});