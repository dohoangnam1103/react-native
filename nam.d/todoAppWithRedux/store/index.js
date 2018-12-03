import { combineReducers } from 'redux';
import {
  DELETE_ITEM_SELECT,
  EDIT_iTEM,
  OPEN_MODAL,
  CHANGE_ITEM_SELECT,
  CLOSE_MODAL,
  ADD_ITEM
} from './constant';

const INITIAL_STATE = {
  listTodo: [
    {id: 1, name: 'test'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
    {id: 4, name: 'test4'},
    {id: 5, name: 'test5'},
  ],
  itemSelected: {
    id: 1,
    name: 'test'
  },
  modalShowed: false
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_ITEM_SELECT:
      return {
        ...state,
        listTodo: state.listTodo.filter(item => item.id !== state.itemSelected.id)
      }

    case OPEN_MODAL:
      return {
        ...state,
        modalShowed: true
      }

    case CLOSE_MODAL:
      return {
        ...state,
        modalShowed: false
      }

    case CHANGE_ITEM_SELECT:
      return {
        ...state,
        itemSelected : state.listTodo.filter(item => item.id === action.id)[0]
      }

    case EDIT_iTEM:
      return {
        ...state,
        listTodo: state.listTodo.map(item => {
          if(item.id === state.itemSelected.id) {

            return {
              ...item,
              name: action.name
            }
          }

          return item;
      })}

    case ADD_ITEM:
      const { name } = action;
      const id = state.listTodo.reduce((max, curr) => {
        (curr.id > max) && (max = curr.id);

        return max + 1;
      }, 0);

      return {
        ...state,
        listTodo: state.listTodo.concat({id, name})
      }

    default:
      return state
  }
};

export default combineReducers({
  root: rootReducer,
});
