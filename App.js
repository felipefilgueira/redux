import React from 'react';
import { Provider } from 'react-redux';
import configStore from './src/redux/configStore'
import AppComponent from './AppComponent'

const store = configStore();
const ReduxComponent = () => (
  
  <Provider store={store}>
    <AppComponent />
  </Provider>
);

export default ReduxComponent;