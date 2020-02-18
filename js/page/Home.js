import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TabPageHeader from '../common/TabPageHeader';
import Swiper from '../common/Swiper';
import Carousel from '../common/Carousel';

const style = StyleSheet.create({
  swiperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperWrap: {
    width: 329.83,
    height: 130,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '首页',
    };
  }
  render() {
    return (
      <View>
        <TabPageHeader title={this.state.name} />
        <View style={style.swiperContainer}>
          <View style={style.swiperWrap}>
            <Swiper width={329.83} height={130} />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
