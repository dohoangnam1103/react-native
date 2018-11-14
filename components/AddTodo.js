import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert
} from 'react-native';

type Props = {};

export default class AddTodo extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      newTask: ''
    }
  }

  handleChangeInput = (text) => {
    this.setState(() => {
      return {newTask: text}
    });
  }

  handleSubmit = () => {
    this.setState(() => {
      return {newTask: ''}
    });

    this.props.handleSubmit(this.state.newTask);
  }

  render() {
    const { newTask } = this.state;

    return (
      <View style={styles.wrapAdd}>
        <TextInput
          style={styles.addInput}
          placeholder='Enter new todo'
          autoFocus={true}
          onChangeText={(text) => this.setState({newTask: text})}
          value={this.state.newTask}
        />
        <Button
          style={styles.addButton}
          title='Add new todo'
          disabled={!newTask}
          onPress={() => this.handleSubmit()}
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapAdd: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  addInput: {
    flex: 80,
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  addButton: {
    flex: 20,
    height: 40,
    padding: 10,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
  }
});
