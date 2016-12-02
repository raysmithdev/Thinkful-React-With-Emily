import { connect } from 'react-redux'
import AddItemView from '../components/AddItemView'
import { addItem, toggleItem } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) =>  {
      return dispatch(addItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItemView)
