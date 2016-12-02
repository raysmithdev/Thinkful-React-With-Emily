import { connect } from 'react-redux'
import ItemListView from '../components/ItemListView'
import { toggleItem } from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItem: (id) => {
      return dispatch(toggleItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListView)
