import React, { useRef, useState } from 'react'
import Button from './Button'

export default function AddItemForm({onAddItems}) {
    const [itemText, setItemText] = useState('')
    const inputRef = useRef()

    const handleSubmit = (event) => {
      event.preventDefault()

      if (!itemText) {
        alert('Empty items not allowed')
        inputRef.current.focus()
        return
      }
      
      onAddItems(itemText)

      setItemText('')

  }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add an item</h2>
        <input ref={inputRef} autoFocus value={itemText} onChange={(event) => setItemText(event.target.value)} />
        <Button text='Add to list' />
    </form>
  )
}
