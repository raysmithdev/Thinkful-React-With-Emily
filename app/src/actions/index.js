import fetch from 'isomorphic-fetch'

const receiveData = (todos) => {
  return {
    type: 'RECEIVE_DATA',
    todos
  }
}

export const addItem = (todo) =>  {
  return dispatch => {
    return fetch('http://localhost:8080/create-todo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: todo
              })
            })
            .then(response => response.json())
            .then(todos => dispatch(receiveData(todos)) )
  }
}

// export const addItem = (item) => {
//   return {
//     type: 'ADD_ITEM',
//     id: id++,
//     item
//   }
// }
//
// export const toggleItem = (id) => {
//   return {
//     type: 'TOGGLE_ITEM',
//     id
//   }
// }
