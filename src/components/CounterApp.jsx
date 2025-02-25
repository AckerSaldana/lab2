import React from 'react'
import {useState} from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>
        CounterApp
      </h1>
      <h2>
        Counter: {counter}
      </h2>
      <button className = "btn btn-primary" onClick = {() => setCounter(counter + 1)}>
        +1
        </button>
        <button className = "btn btn-primary"  onClick = {() => setCounter(counter - 1)}>
        -1
        </button>
        <button className = "btn btn-primary"  onClick = {() => setCounter(counter + 100)}>
        +100
        </button>
        <button className = "btn btn-primary"  onClick = {() => setCounter(counter + 10000)}>
        +10000
        </button>
        <button className = "btn btn-primary"  onClick = {() => setCounter(counter - 10000)}>
        -10000
        </button>
        <button className = "btn btn-primary" onClick = {() => setCounter(0)}>
        Reset
        </button>

    </div>
  )
}

export default CounterApp
