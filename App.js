import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import MyConversions from "./src/views/MyConversions"
import NewConversions from "./src/views/NewConversions"
import NewInputs from "./src/views/NewInputs"

export default class App extends React.Component {
  render() {
    return (
      <Nav/>
    );
  }
}
const Nav = createMaterialBottomTabNavigator({
  MyConversions:{
    screen:MyConversions,
    navigationOptions:{
      title:'MyConversions',
    }
  },
  NewInputs:{
    screen:NewInputs,
    navigationOptions:{
      title:'NewInputs',
    }
  },
  NewConversions:{
    screen:NewConversions,
    navigationOptions:{
      title:'NewConversions',
    }
  }
},
{
  tabBarOptions:{
    tabBarColor:'#124',
    inactiveTintColor:'#000',
    activeTintColor :'#717',
    labelStyle:{
      fontSize:14
    },
  },

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// tabBarIcon:({focused, tintColor})=>{
//    const iconName = "mobile-phone"
//    console.log(iconName)
//    return <Icon name={iconName} color={tintColor} size={30}/>
// }
// tabBarIcon:({focused, tintColor})=>{
//   const iconName = 'desktop'
//  return <Icon name={iconName} color={tintColor} size={20}/>
// }
