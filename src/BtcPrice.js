import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchPrice } from './client'

const BtcPrice = () => {

    const [price, setPrice] = useState()

    useEffect(()=>{

        const prom = fetchPrice()
        
        prom.then((newPrice)=>{            
            setPrice(newPrice)
        })
        console.log("promise registered");
    }, [])

  return (
    <div>BtcPrice

        <br/>
        <h2> price is {price} </h2>

        <button onClick={()=>{fetchPrice(setPrice)}}> Refresh </button>
    </div>
  )
}

export default BtcPrice