import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemListView from '../components/ItemListView'
import { toggleItem, fetchTodos } from '../actions'

class ItemList extends Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    return <ItemListView />
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItem: (id) => {
      return dispatch(toggleItem(id))
    },
    fetchTodos: () =>  {
      return dispatch(fetchTodos())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
