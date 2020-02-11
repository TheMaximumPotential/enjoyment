import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil';

class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigatorUtil.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 200);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default Welcome;
