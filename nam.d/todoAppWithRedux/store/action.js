import {
  DELETE_ITEM_SELECT,
  EDIT_iTEM,
  OPEN_MODAL,
  CHANGE_ITEM_SELECT,
  CLOSE_MODAL,
  ADD_ITEM
} from './constant';

export const actDeleteItemSelect = id => ({
  type: DELETE_ITEM_SELECT,
  id
});

export const actEditItem = (name) => ({
  type: EDIT_iTEM,
  name
});

export const actOpenModal = () => ({
  type: OPEN_MODAL
});

export const actCloseModal = () => ({
  type: CLOSE_MODAL
});

export const actChangeItemSelect = (id) => ({
  type: CHANGE_ITEM_SELECT,
  id
});

export const actAddItem = (name) => ({
  type: ADD_ITEM,
  name
});
