import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from '../state/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}> + </button>
                <button onClick={() => dispatch(decrement())}> - </button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>add amount</button>
                <button onClick={resetAll}>reset</button>
            </div>
        </section>
    )
}

export default Counter