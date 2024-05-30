import React from 'react'

export default function Button({text, type, handleGroupButtonAction}) {
  return (
    <button onClick={() => handleGroupButtonAction(text)} className={`btn ${type === 'secondary' ? "btn--secondary" : '' }`}>{text}</button>
    
  )
}
