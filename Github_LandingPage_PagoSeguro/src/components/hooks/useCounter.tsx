import { useState } from 'react'

export const useCounter = () => {

    const [count, setCount] = useState(120)

    const increment = (value: number) => {
    setCount(count + value);

    }

    return (
    
        { count, increment }
    
    )
}
