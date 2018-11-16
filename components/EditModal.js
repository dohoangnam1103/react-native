import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button
} from 'react-native';
import Modal from 'react-native-modalbox';

type Props = {};

const screen = Dimensions.get('window');

export default class EditModal extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      itemSelected: null
    }
  }

  showEditModal = () => {
    this.refs.myModal.open();
  }

  handleChange = (text) => {
    this.setState({
      itemSelected: text
    });
    debugger
  }

  handleSubmitEdit = () => {
    this.refs.myModal.close();
    this.props.handleSubmitEdit(this.props.itemSelected, this.state.itemSelected);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.itemSelected && this.setState({
      itemSelected: nextProps.itemSelected
    });
  }

  render() {
    const {itemSelected} = this.state;
    const xhtml = itemSelected? itemSelected.name: '';

    return (
      <Modal
        ref={'myModal'}
        style={styles.editModal}
        position='center'
        backdrop={true}
        onClosed={() => {

        }}
      >
        <View style={styles.wrapEdit}>
          <TextInput
            autoFocus={true}
            style={styles.editInput}
            onChangeText={(text) => this.handleChange(text)}
            value={xhtml}
          />
          <Button
            style={styles.editButton}
            title='Edit'
            onPress={this.handleSubmitEdit}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  editModal: {
    justifyContent: 'center',
    borderRadius: 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 200
  },
  wrapEdit: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  editInput: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  editButton: {
    flex: 1,
    height: 40,
    padding: 10,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
  }
});
