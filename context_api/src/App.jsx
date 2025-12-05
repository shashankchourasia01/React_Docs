//import React, { useContext } from 'react'
import React from 'react'
import './App.css'
import A from './components/A'
import B from './components/B'
import { UseMyContext } from './MyContext'
//import { MyContext } from './MyContext'

const App = () => {

  // const data = useContext(MyContext)
  const {setCount} = UseMyContext()
  
  

  //production LEVEL LOGIC
  

  return (
    <div className='text-white bg-red-500 p-10 '>
      
      App
      <button onClick={()=> setCount(prev => prev + 1)}>click</button>
      <A />
      <B />
    </div>
  )
}

export default App
