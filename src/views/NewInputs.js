import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import MyHeader from "./MyHeader"

export default class NewInputs extends React.Component {
  render() {

    return (
      <View>
      <MyHeader/>
      <Text> MY RESULTS PAGE</Text>

      </View>
    )
  }
}
  // <FormLabel>Input Name</FormLabel>
  // <FormInput onChangeText={someFunction}/>
  //<FormValidationMessage>{'This field is required'}</FormValidationMessage>
  // <FormLabel>Nutrient </FormLabel>
  // <FormInput onChangeText={someFunction}/>
  // <FormValidationMessage>{'This field is required'}</FormValidationMessage>
  //
  // <FormLabel>Nutrient %</FormLabel>
  // <FormInput onChangeText={someFunction}/>
  // <FormValidationMessage>{'This field is required'}</FormValidationMessage>
  //
  // <FormLabel>Nutrient Weight</FormLabel>
  // <FormInput onChangeText={someFunction}/>
  // <FormValidationMessage>{'This field is required'}</FormValidationMessage>
  // <Dropdown label='Favorite Fruit' data={data}/>
  //
  // <FormLabel>Area</FormLabel>
  // <FormInput onChangeText={someFunction}/>
  // <FormValidationMessage>{'This field is required'}</FormValidationMessage>
  //
  // <Button raised title='Get Results' />
