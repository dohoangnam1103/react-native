/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      listTodo: [
        {id: 1, name: 'test'},
      ],
    }
  }

  handleSubmit = (newTodo) => {
    const newId = this.state.listTodo.reduce((max, curr) => {
      (curr.id > max) && (max = curr.id);

      return max + 1;
    }, 0);

    this.setState({
      listTodo: this.state.listTodo.concat({id: newId, name: newTodo})
    })
  }

  handleDelete = (id) => {
    this.setState({
      listTodo: this.state.listTodo.filter(item => item.id !== id)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo
          newToDo={this.state.newTodo}
          handleSubmit={this.handleSubmit}
        />

        <ListTodo
          listTodo={this.state.listTodo}
          handleDelete={this.handleDelete}
        />
      </View>
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
