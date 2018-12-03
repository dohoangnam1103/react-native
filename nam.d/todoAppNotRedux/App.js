import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';
import EditModal from './components/EditModal';

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
      itemSelected: null
    }
  }

  handleSubmit = (newTodo) => {
    const newId = this.state.listTodo.reduce((max, curr) => {
      (curr.id > max) && (max = curr.id);

      return max + 1;
    }, 0);

    this.setState({
      listTodo: this.state.listTodo.concat({id: newId, name: newTodo})
    });
  }

  handleDelete = () => {
    const { id } = this.state.itemSelected;

    this.setState({
      listTodo: this.state.listTodo.filter(item => item.id !== id)
    });
  }

  handleEdit = () => {
    this.refs.editModal.showEditModal();
  }

  handleSubmitEdit = (obj, newName) => {
    const newState = this.state.listTodo.map(todo => {
      if (todo.id === obj.id){

        return {...todo, name: newName};
      }

      return todo;
    });

    this.setState({listTodo: newState});
  }

  handleChangeItemSelect = (id) => {
    objEdit = this.state.listTodo.filter(todo => todo.id === id)[0];
    this.setState({
      itemSelected: objEdit
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
          handleEdit={this.handleEdit}
          handleChangeItemSelect={this.handleChangeItemSelect}
        />

        <EditModal
          ref={'editModal'}
          parentFlatList={this}
          itemSelected={this.state.itemSelected}
          handleSubmitEdit={this.handleSubmitEdit}
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
