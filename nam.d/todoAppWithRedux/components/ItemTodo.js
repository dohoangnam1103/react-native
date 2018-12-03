import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';

import {
  actDeleteItemSelect,
  actEditItem,
  actOpenModal,
  actChangeItemSelect
} from '../store/action';

type Props = {};

class ItemTodo extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      activeRowKey: null,
      name: ''
    }
  }

  handleDelete = () => {
    this.props.handleDelete();
  }

  handleEdit = () => {
    this.props.handleEdit();
  }

  render() {
    const swiperSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        this.setState({activeRowKey: null});
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.id});
        this.props.changeSelectItem(this.props.item.id);
      },
      right: [
        {
          onPress: () => {
            this.props.deleteItem();
          },
          text: 'Delete',
          type: 'delete'
        }
      ],
      left: [
        {
          onPress: () => {
            this.props.openModal()
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

const mapStateToProps = state => ({
  listTodo: state.root.itemSelected
});

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(actDeleteItemSelect()),
  openModal: () => dispatch(actOpenModal()),
  changeSelectItem: id => dispatch(actChangeItemSelect(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemTodo);

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
