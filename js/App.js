/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {RootNavigator} from './navigator/AppNavigator';
import {connect, Provider} from 'react-redux';
import {BackHandler} from 'react-native';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {NavigationActions} from 'react-navigation';
import store from './store';

const App = createReduxContainer(RootNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});

// const AppWithNavigationState = connect(mapStateToProps)(App);

@connect(mapStateToProps)
class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {
      dispatch,
      state: {index},
    } = this.props;

    if (index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    /* more setup code here! this is not a runnable snippet */
    return <App {...this.props} />;
  }
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
