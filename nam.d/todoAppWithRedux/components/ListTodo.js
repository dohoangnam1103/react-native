import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import ItemTodo from './ItemTodo';

type Props = {};

class ListTodo extends Component<Props> {

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

const mapStateToProps = (state) => {
  return {
    listTodo: state.root.listTodo
  }
};

export default connect(mapStateToProps)(ListTodo);

const styles = StyleSheet.create({
  FlatList: {
    alignSelf: 'stretch',
  }
});
