import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import Swipeout from 'react-native-swipeout';

type Props = {};

export default class ItemTodo extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      activeRowKey: null
    }
  }

  handleDelete = () => {
    debugger
    this.props.handleDelete(this.state.activeRowKey);
  }

  render() {
    const swiperSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        this.setState({activeRowKey: null});
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.id});
      },
      right: [
        {
          onPress: () => {
            this.handleDelete()
          },
          text: 'Delete',
          type: 'delete'
        }
      ],
      left: [
        {
          onPress: () => {

          },
          text: 'Edit',
          type: 'secondary'
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    }

    return (
      <Swipeout {...swiperSettings}>
        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'black',
    padding: 20,
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'white'
  }
});
