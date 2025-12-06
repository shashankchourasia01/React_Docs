
//import { useState } from 'react'
import './App.css'

function App() {

   //const [count, SetCount] = useState(0);

  // function greet() {
  //   alert('hello world')
  // }

  // function handleChange(){
  //   SetCount(count + 1);
  //   console.log(count);
  // }

  // function value (e){
  //   console.log(e.target.value)
  // }


  //passing argument to event handler function
  // function test(name){
  //   console.log(name);
  // }

  // //using state with events
  // function increament ()  {
  //   SetCount(prev => prev + 1);
  // }

  function handle(e){
    e.preventDefault();
    console.log('form submitted');

  }
  

  return (
    <>
      
      {/* <h1>hello</h1>
      <button onClick={greet}>click</button>

      <input onChange={handleChange} type="text" placeholder='name' />
      <input onChange={value} type="text" placeholder='name' /> */}


        {/* //passing argument to event handler function
        <button onClick={()=>test('sha')}>click</button>

        //using state with events
        <button onClick={increament}>count+1</button>
        <h1>{count}</h1> */}

        //preventing default behavior
        <form onSubmit={handle} action="">
          <input  type="text" placeholder='name' />
          <button >subit</button>
        </form>

      
    </>
  )
}

export default App
