import React from 'react';
import Expo from 'expo';

import Root from './src/native/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }
  render() {
    return <Root store={store} persistor={persistor} />;
  }
}
