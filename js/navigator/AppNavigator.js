import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../page/Home';
import Activity from '../page/Activity';
import Chats from '../page/Chats';
import Me from '../page/Me';
import Welcome from '../page/Welcome';
import ActivityDetails from '../page/ActivityDetails';

const InitNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor, size}) => (
          <Icon name="home" color={tintColor} size={20} />
        ),
      },
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        tabBarLabel: '活动',
        tabBarIcon: ({focused, tintColor, size}) => (
          <Icon name="staro" color={tintColor} size={22} />
        ),
      },
    },
    Chats: {
      screen: Chats,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({focused, tintColor, size}) => (
          <Icon name="message1" color={tintColor} size={20} />
        ),
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor, size}) => (
          <Icon name="user" color={tintColor} size={22} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      // showIcon: true, // 是否显示选项卡的图标
      // activeTintColor: 'tomato', // 选中时状态颜色
      // inactiveTintColor: 'gray', // 未选中状态颜色
      // labelStyle: {
      //   // 选项卡标签的样式对象
      //   fontSize: 20,
      // },
      // style: {
      //   // 选项卡栏的样式对象
      //   backgroundColor: 'blue',
      // },
    },
    navigationOptions: {
      headerShown: false,
    },
  },
);
const ActivityNavigator = createStackNavigator(
  {
    ActivityDetails: {
      screen: ActivityDetails,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  },
);
const MainNavigator = createStackNavigator({
  TabNavigator,
  ActivityNavigator,
});

export default createAppContainer(
  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
  }),
);

// const TABS = [
//   {
//     name: 'Home',
//     component: Home,
//     options: {
//       tabBarLabel: '首页',
//       tabBarIcon: ({focused, color, size}) => (
//         <Icon name="home" color={color} size={20} />
//       ),
//     },
//   },
//   {
//     name: 'Activity',
//     component: Activity,
//     options: {
//       tabBarLabel: '活动',
//       tabBarIcon: ({focused, color, size}) => (
//         <Icon name="staro" color={color} size={22} />
//       ),
//     },
//   },
//   {
//     name: 'Chats',
//     component: Chats,
//     options: {
//       tabBarLabel: '消息',
//       tabBarIcon: ({focused, color, size}) => (
//         <Icon name="message1" color={color} size={20} />
//       ),
//     },
//   },
//   {
//     name: 'Me',
//     component: Me,
//     options: {
//       tabBarLabel: '我的',
//       tabBarIcon: ({focused, color, size}) => (
//         <Icon name="user" color={color} size={22} />
//       ),
//     },
//   },
// ];

// function InitNavigator() {
//   return (
//     <InitStackNavigator.Navigator>
//       <InitStackNavigator.Screen name="Welcome" component={Welcome} />
//     </InitStackNavigator.Navigator>
//   );
// }

// function MainNavigator() {
//   return (
//     <MainStackNavigator.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <MainStackNavigator.Screen name="TabNavigator" component={TabNavigator} />
//       <MainStackNavigator.Screen
//         name="ActivityNavigator"
//         component={ActivityNavigator}
//       />
//     </MainStackNavigator.Navigator>
//   );
// }

// function ActivityNavigator() {
//   return (
//     <ActivityRelevantNavigator.Navigator initialRouteName="ActivityDetails">
//       <ActivityRelevantNavigator.Screen
//         name="ActivityDetails"
//         component={ActivityDetails}
//       />
//     </ActivityRelevantNavigator.Navigator>
//   );
// }

// function TabNavigator() {
//   return (
//     <BottomTabNavigator.Navigator initialRouteName="Home">
//       {TABS.map((item, index) => (
//         <BottomTabNavigator.Screen
//           key={index}
//           name={item.name}
//           component={item.component}
//           options={{...item.options}}
//         />
//       ))}
//     </BottomTabNavigator.Navigator>
//   );
// }
