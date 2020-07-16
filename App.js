
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import MovieScreen from './screens/MovieScreen'
import SettingScreen from './screens/SettingScreen'
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants'

const TabNavigator = createBottomTabNavigator();

export default class App extends React.Component {


render(){
  return(
    <NavigationContainer 
    style={styles.bar}
    theme={DarkTheme}
    >
      <TabNavigator.Navigator 
       initialRouteName="Movies"
       tabBarOptions={{
        activeBackgroundColor:'#711324',
          inactiveBackgroundColor:'#8d182d',
        
          labelStyle:styles.tabs,
       }}
       >
          <TabNavigator.Screen 
          name="Movies" 
          component={MovieScreen}
          options={{
          title: 'Movies',
          tabBarIcon:() => (
         <Ionicons
         name={`ios-film`}
          size={30}
          color={'#fff'}
          />
          ),
          }}
          


          />
          <TabNavigator.Screen 
          name="Settings" 
          component={SettingScreen}  
          options={{
            title:'Settings',
            tabBarIcon:() => (
         <Ionicons
         name={`ios-settings`}
          size={30}
          color={'#fff'}
          />
          )
          }}

          />
        </TabNavigator.Navigator>
    </NavigationContainer>  
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabs:{
    fontSize:15,
    justifyContent:'center',
    color:'#fff',
    fontWeight:'Bold',

  },
  bar:{
  paddingTop:Constants.statusBarHeight,
  }
  
});
