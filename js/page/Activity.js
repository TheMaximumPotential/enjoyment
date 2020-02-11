import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil';

class Activity extends Component {
  render() {
    return (
      <View>
        <Text>Activity</Text>
        <View>
          <Text
            onPress={() => {
              NavigatorUtil.goPage(this.props, 'ActivityDetails');
            }}>
            跳转到详情页
          </Text>
        </View>
      </View>
    );
  }
}

export default Activity;
