let id = 1

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    id: id++,
    item
  }
}

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  }
}
