import {combineReducers} from 'redux';
import {RootNavigator} from '../navigator/AppNavigator';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(RootNavigator);
const appReducer = combineReducers({
  nav: navReducer,
});

export default appReducer;
