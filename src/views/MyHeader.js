import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Dropdown } from 'react-native-material-dropdown';
import { Header } from 'react-native-elements'

export default class MyHeader extends React.Component {
  render() {
    return(
      <View style={styles.header}>
        <Text>Farmer Friend </Text>
        <Text>Icon</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
    justifyContent:'space-between',
  },
});
