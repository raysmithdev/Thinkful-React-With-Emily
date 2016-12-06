import React, { Component } from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import ItemList from './containers/ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem />
        <ItemList />
      </div>
    );
  }
}

export default App
