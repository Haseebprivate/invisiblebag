import { useState } from "react"



export default function ItemList({items, setItems, handleOnClickPacked, handleDeleteItem}) {
  
  return (
    <ul>
      {items.map((item) => <Item key={item.id} item={item} handleOnClickPacked={handleOnClickPacked} handleDeleteItem={handleDeleteItem} />)}
    </ul>
  )
}

function Item({item, handleOnClickPacked, handleDeleteItem}) {
  return (
    <>
    <li className='item'>
     <label onClick={()=>handleOnClickPacked(item)}>
      <input onClick={()=>handleOnClickPacked(item)} type='checkbox' checked={item.packed} />{item.name}
     </label>
     <button onClick={() => handleDeleteItem(item)}>🗑</button>
    </li>
    
    </>
  )
}