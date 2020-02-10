import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigatorUtil from '../../navigator/navigation-util';

class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigatorUtil.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View alignItem={'center'} justifyContent={'center'}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default Welcome;
