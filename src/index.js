import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './store';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
