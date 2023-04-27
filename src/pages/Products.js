import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OrderFood from '../OrderFood'

function Products() {

  const params = useParams()
  const nav = useNavigate()

  return ( <>
          <br/>
          <br/>
          <br/>
            <div style={{maxWidth: "400px", margin: 'auto'}}>
                  
                  <OrderFood/>
                  
                  </div>
    
  </>)
}

export default Products