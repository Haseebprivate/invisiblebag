import React from 'react'
import Button from './Button'
import { secondaryButtons } from './lib/constants'




export default function ButtonGroup({handleGroupButtonAction}) {
    
  return (
    <section className='button-group'>
        {secondaryButtons.map((text) => <Button key={text} type='secondary' text={text} handleGroupButtonAction={handleGroupButtonAction} />)}
        {/* <Button type='secondary' text='Mark all as completed' />
        <Button type='secondary' text='Mark all as incompleted' />
        <Button type='secondary' text='Reset to initial' />
        <Button type='secondary' text='Remove all items ' /> */}
    </section>
  )
}
