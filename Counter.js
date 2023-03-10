import {useState} from 'react'

const Counter =(props) => {
    const [count,setCount] = useState(0)

    const decrement = () => {
        setCoount(count -1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{state[0]}</h2>
            <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
            <button onClick={reset}>reiniciar</button>
        </div>
    )
}

export default Counter