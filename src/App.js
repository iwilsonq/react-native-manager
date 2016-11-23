import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCb_QdrGFKkEL-74xC9TvfdhTDxfs7bMX4',
      authDomain: 'manager-39023.firebaseapp.com',
      databaseURL: 'https://manager-39023.firebaseio.com',
      storageBucket: 'manager-39023.appspot.com',
      messagingSenderId: '860739012472'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
