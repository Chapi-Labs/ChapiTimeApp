import React from 'react';
import Root from './src/native/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  render() {
    return <Root store={store} persistor={persistor} />;
  }
}
