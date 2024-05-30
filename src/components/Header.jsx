import React from 'react'
import Logo from './Logo'
import Counter from './Counter'

export default function Header({items}) {
  return (
    <header>
        <Logo />
        <Counter items={items} />
    </header>
  )
}
