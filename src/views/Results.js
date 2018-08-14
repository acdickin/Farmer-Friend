import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Dropdown } from 'react-native-material-dropdown';

export default class Results extends React.Component {
  render() {
    let weight = [{
       value: 'lb',
     }, {
       value: 'oz',
     }, {
       value: 'cup',
     }, {
       value: 'tsp',
     }, {
       value: 'gram',
     }, {
       value: 'tsp',
     }, {
       value: 'tbsp',
    }];

    return (
      <Text> Results</Text>
      <View>
        <Text>10</Text>
        <Dropdown data={weight}  />
      <View>
    )
  }
}
