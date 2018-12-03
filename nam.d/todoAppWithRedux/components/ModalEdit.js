import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
  Text
} from 'react-native';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';

import {
  actEditItem,
  actCloseModal
} from '../store/action';

type Props = {};

const screen = Dimensions.get('window');

class EditModal extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      itemSelected: null,
      stateChangeByInput: false
    }
  }

  static getDerivedStateFromProps(props, state) {

    if(props.itemEdit && props.itemEdit.name !== state.itemSelected && !state.stateChangeByInput) {

      return {
        itemSelected: props.itemEdit.name
      };
    }

    return state;
  }

  componentDidUpdate() {
    if(this.props.modalShowed) {
      this.refs.myModal.open();
    } else {
      this.refs.myModal.close();
    }
  }

  handleSubmitEdit = () => {
    this.setState({
      itemSelected: null,
      stateChangeByInput: false
    });

    this.props.submitEdit(this.state.itemSelected);
    this.props.closeModal();
  }

  render() {
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
            onChangeText={(text) => this.setState({
              itemSelected: text,
              stateChangeByInput: true
            })}
            value={this.state.itemSelected}
          />
          <Button
            style={styles.editButton}
            title='Edit'
            onPress={this.handleSubmitEdit}
          />
        </View>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  submitEdit: name => dispatch(actEditItem(name)),
  closeModal: () => dispatch(actCloseModal())
});

const mapStateToProps = state => {
  return {
    modalShowed: state.root.modalShowed,
    itemEdit: state.root.itemSelected
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);

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
