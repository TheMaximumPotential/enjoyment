/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import InitNavigator from './navigator/app-navigator';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <InitNavigator />
      </NavigationContainer>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});
export default App;
