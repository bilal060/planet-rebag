/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './src/routes/CustomerNavigator/BottomStack';
import StoreBottomStack from './src/routes/CustomerNavigator/StoreBottomStack';
import routes from './src/routes/routes';
import {Provider} from 'react-redux';
import {store} from './src/Store/index';
import FlashMessage from 'react-native-flash-message';
import MainNavigator from './src/routes/MainNavigator';

const Stack = createStackNavigator();
const App = () => {
  return (
    
    <Provider store={store}>
      <StatusBar hidden={true} />
      <MainNavigator />
      <FlashMessage duration={3000} position={'top'} />
    </Provider>
  );
};

export default App;
