import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import MovieSearchScreen  from './MovieSearchScreen'
import MovieDetailsScreen from './MovieDetailsScreen'
const StackNavigator = createStackNavigator();



export default class MovieScreen extends React.Component {
    render(){
        return(
    <StackNavigator.Navigator 
    initialRouteName="MovieSearch"
    
    >

        <StackNavigator.Screen 
            name="MovieSearch" 
            component={MovieSearchScreen}
            options={{
                title:'Search for Movies',
                headerStyle:{
                    backgroundColor:'#8d182d'
                },
                headerTintColor:'#fff',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    fontWeight:'bold',
                    size:'60',
                }
            }}
            
        />

        <StackNavigator.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
            options={({ route }) => ({
                title:route.params.Title,
                headerStyle:{
                    backgroundColor:'#711324'
                },
                headerTintColor:'#fff',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    fontWeight:'bold',
                    size:'60',
                }
            
            })}
                
                
            
        />

    </StackNavigator.Navigator>
        );
}
}

