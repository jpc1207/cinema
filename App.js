import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
//import logo from './spotook_logo_app_color_v1.png' // relative path to image
import Search from './Components/Search'
import PrestaList from './Components/prestaList'
//import Search from './Components/'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PrestaList/>
      </View>
    );
  }
}
