/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

import ListTodo from './components/ListTodo';
import EditModal from './components/ModalEdit';
import AddTodo from './components/AddTodo';


const store = createStore(rootReducer);

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <AddTodo />
          <ListTodo />
          <EditModal />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
