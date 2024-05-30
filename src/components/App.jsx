import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { initialItems } from "./lib/constants"



function App() {
  const [items, setItems] = useState(initialItems)

  const handleAddItems = (newItemText) => {
    const newItem = {
      name: newItemText ,
      packed: false,
      id: new Date().getTime(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleGroupButtonAction = (type) => {
    if (type === 'Remove all items') {
      setItems([])
    } else if (type === 'Reset to initial') {
      setItems(initialItems)
    } else if (type === 'Mark all as completed') {
      const completed = items.map((item) => {
        return {...item, packed: true}
      })

      setItems(completed)

     console.log(completed)
    } else if (type === 'Mark all as incompleted') {
      const incompleted = items.map((item) => {
        return {...item, packed: false}
      })
      setItems(incompleted)
    }
  }
  
  const handleOnClickPacked = (packeditem) => {
    const updatedItem = items.map((item) => {
      if (item === packeditem) {
        
        return {...item, packed: !item.packed }
      }
      return item
    })
    setItems(updatedItem)
  }

  const handleDeleteItem = (deleteItem) => {
    const updatedItems = items.filter((item) => item.id !== deleteItem.id)
    setItems(updatedItems)
  }
  return (
    <>
    <BackgroundHeading />
    <main>
      <Header items={items} />
      <ItemList items={items} setItems={setItems} handleOnClickPacked={handleOnClickPacked} handleDeleteItem={handleDeleteItem} />
      <Sidebar handleAddItems={handleAddItems} handleGroupButtonAction={handleGroupButtonAction} />
    </main>
    <Footer />
    </>
  )
}

export default App
