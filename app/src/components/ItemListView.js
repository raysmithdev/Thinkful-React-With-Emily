import React from 'react'

const ItemListView = ({ items, toggleItem }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
            <li
              key={item.id}
              onClick={ () => toggleItem(item.id) }
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {item.text}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListView
