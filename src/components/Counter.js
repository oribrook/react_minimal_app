import React, { useState } from 'react'
import ImageSwapper from './ImageSwapper'


function Counter() {
    const [counter, setCounter] = useState(0)
    
    console.log("Counter rendered")

    return (
        <div>
            
            <button onClick={() => { setCounter(counter + 1) } }>
                +1 </button>
                <p>You clicked {counter} times</p>
            <button onClick={() => { setCounter(counter - 1) } }>
                -1 </button>
                                    
            <ImageSwapper counter={counter}/>
    </div>
  )
}

export default Counter