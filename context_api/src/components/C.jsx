import React from 'react'
import { UseMyContext } from '../MyContext'

const C = () => {

    const {count} = UseMyContext()

  return (
    <div className='bg-amber-700 p-10'>
      C
      <h1>{count}</h1>
    </div>
  )
}

export default C
