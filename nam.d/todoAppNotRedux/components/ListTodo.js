import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import ItemTodo from './ItemTodo';

type Props = {};

export default class ListTodo extends Component<Props> {

  render() {
    return (
      <FlatList style={styles.FlatList}
        data={this.props.listTodo}
        keyExtractor={(item) => item.id+''}
        renderItem={({item}) =>
          <ItemTodo
            item={item}
            handleDelete={this.props.handleDelete}
            handleEdit={this.props.handleEdit}
            handleChangeItemSelect={this.props.handleChangeItemSelect}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {
    alignSelf: 'stretch',
  }
});
