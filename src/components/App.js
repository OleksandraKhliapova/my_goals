import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import MainScreen from './MainScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
