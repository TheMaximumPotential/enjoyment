import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil';

const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 24,
    color: 'rgb(1, 123, 255)',
  },
});

class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigatorUtil.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 1000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.txt}>Welcome</Text>
      </View>
    );
  }
}

export default Welcome;
