import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const ListButton = ["All", "Gaming", "Css", "Mixes", "Live", "Music", "Trading", "Computer", "Ai", "Colleges", "Android", "Lectures", "Wached", "Recently uploaded"];

  return (
    <div className='flex gap-2 mt-4 px-5'>

      {ListButton.map((items, index) => (
        <Button name={items} key={index} />
      ))}

    </div>
  )
}

export default ButtonList