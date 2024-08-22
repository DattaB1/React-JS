import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)   //state variable first to be decalred
  //let counter=5            // its a normal value 
  const addvalue=()=>{        //creating a arrow function name as addvalue()
    //console.log("value added",Math.random()) 
    //console.log("clicked",counter);    // for showing a value on console
    //counter=counter+1                  or
    //setCounter(counter)                or
    setCounter(counter+1)
  }

  const removevalue=()=>{    //same as above create a arrow function remove
    setCounter(counter-1)   //calling the setcounter
  }
  return (
    <>
      <h1>Second Mini Project</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}>
        Add Value
      </button>
      <br/>
      <button onClick={removevalue}>
        remove Value
      </button>
    </>
  )
}

export default App
