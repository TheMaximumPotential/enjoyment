import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  headerWrap: {
    height: 58.1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 17.37,
    color: '#333',
  },
});

class TabPageHeader extends Component {
  render() {
    return (
      <View style={style.headerWrap}>
        <Text style={style.headerTxt}>{this.props.title}</Text>
      </View>
    );
  }
}

export default TabPageHeader;
