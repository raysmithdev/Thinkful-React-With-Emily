import React from 'react'

const ItemListView = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListView
