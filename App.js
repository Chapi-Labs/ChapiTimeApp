import React from 'react';
import { Asset, AppLoading, Font } from 'expo';

import Root from './src/native/index';
import configureStore from './src/store/index';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }


  async _cacheResourcesAsync() {
    const images = [
      require('./assets/splash.png'),
      require('./src/images/ChapiTime.png'),
    ];
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  }

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ loading: false })}
          onError={console.warn}
        />
      );
    }
    return <Root store={store} persistor={persistor} />;
  }
}
