/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Navigators from './navigator/AppNavigator';

const App: () => React$Node = () => {
  return (
    <View style={style.container}>
      <Navigators />
    </View>
  );
};

const {width, height} = Dimensions.get('window');
console.log(width, height);

const style = StyleSheet.create({
  container: {
    // width: 350,
    // height: 600,
    width,
    height,
    paddingBottom: 50,
  },
});
export default App;
