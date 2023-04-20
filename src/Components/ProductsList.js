import React, { useContext } from 'react'
import { AppContext } from '../App'
import Product from './Product'

function ProductsList() {
    const { data } = useContext(AppContext)
    
    console.log(data)

  return (
      <div style={{ textAlign: 'center' }}>
          <br/>
          {data.map((k) => {
              return <Product product={k} />              
        })}      
      </div>
  )
}

export default ProductsList