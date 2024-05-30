import React from 'react'

export default function Counter({items}) {
  const packedItemsCount = items.filter((item) => {
    return item.packed === true
  })
  console.log(packedItemsCount)
  return (
    <p><b>{packedItemsCount.length}</b> / {items.length} items packed</p>
  )
}
