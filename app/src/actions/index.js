let id = 1

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    id: id++,
    item
  }
}

export const toggleItem = (id) => {
  return {
    type: 'TOGGLE_ITEM',
    id
  }
}
