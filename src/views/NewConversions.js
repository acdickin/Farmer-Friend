import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import MyHeader from "./MyHeader"

export default class NewConversions extends React.Component {
  render() {
    let land = [{
       value: 'sq ft',
     }, {
       value: 'sq m',
     }, {
       value: 'acre ',
     }, {
       value: 'hectare ',
    }];
    return (
      <View>
        <MyHeader/>
        <Text>10</Text>
      </View>
    );
  }
}
// <FormLabel>Field Name</FormLabel>
// <FormInput onChangeText={someFunction}/>
// <FormValidationMessage>{'This field is required'}</FormValidationMessage>
//
// <FormLabel>Inputs</FormLabel>
// <FormInput onChangeText={someFunction}/>
// <FormValidationMessage>{'This field is required'}</FormValidationMessage>
//
// <FormLabel>Nutrient </FormLabel>
// <FormInput onChangeText={someFunction}/>
// <FormValidationMessage>{'This field is required'}</FormValidationMessage>
//
//
// <FormLabel>Name</FormLabel>
// <FormInput onChangeText={someFunction}/>
// <FormValidationMessage>{'This field is required'}</FormValidationMessage>
// <Dropdown data={land} />
//
// <FormLabel>Name</FormLabel>
// <FormInput onChangeText={someFunction}/>
// <FormValidationMessage>{'This field is required'}</FormValidationMessage>
// <Dropdown data={land} />
//
// <Button raised title='Get Results' />
