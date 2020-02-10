import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../page/home';
import Activity from '../page/activity';
import Chats from '../page/chats';
import Me from '../page/me';
import Welcome from '../page/welcome';

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

function InitNavigator() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <StackNavigator.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
        }}
      />
      <StackNavigator.Screen
        name="NavTabBar"
        component={NavTabBar}
        options={{
          title: 'NavTabBar',
        }}
      />
    </StackNavigator.Navigator>
  );
}

function NavTabBar() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              source={require('../common/images/home.png')}
              style={{height: 40, width: 40}}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../common/images/home.png')}
              style={{height: 40, width: 40}}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../common/images/home.png')}
              style={{height: 40, width: 40}}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../common/images/home.png')}
              style={{height: 40, width: 40}}
            />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default InitNavigator;
