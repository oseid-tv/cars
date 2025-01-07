import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';

// create component
const App = () => {
  return <Header />;
};

// render component to screen
AppRegistry.registerComponent('cars', () => App);
