import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ItemTodo from './ItemTodo';
import Swipeout from 'react-native-swipeout';


type Props = {};

export default class ListTodo extends Component<Props> {

  render() {
    return (
      <FlatList style={styles.FlatList}
        data={this.props.listTodo}
        keyExtractor={(item) => item.id+''}
        renderItem={({item}) => <ItemTodo handleDelete={this.props.handleDelete} item={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {
    alignSelf: 'stretch',
  }
});
