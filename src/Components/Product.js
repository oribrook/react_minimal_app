import React, { useState } from 'react'

function Product(props) {
    
  return (
      <div style={{border: 'black solid 2px', maxWidth: "50%", margin: 'auto'}}>          
          <p> type:  {props.product.type} </p>          
          <p> year: {props.product.year} </p>                    
    </div>
  )
}

export default Product