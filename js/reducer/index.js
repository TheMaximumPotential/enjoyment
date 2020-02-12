import {combineReducers} from 'redux';
import {RootNavigator} from '../navigator/AppNavigator';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import activityList from './list/index';

const navReducer = createNavigationReducer(RootNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  activityList,
});

export default appReducer;
