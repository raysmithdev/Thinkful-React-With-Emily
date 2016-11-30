import { connect } from 'react-redux'
import ItemListView from '../components/ItemListView'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, null)(ItemListView)
