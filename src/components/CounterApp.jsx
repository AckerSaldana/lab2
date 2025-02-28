import React from 'react'
import {useState} from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterApp = () => {

  const {counter, increment, decrement, reset} = useCounter(0)

  return (
    <div>
      <h1>
        CounterApp
      </h1>
      <hr/>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterApp
