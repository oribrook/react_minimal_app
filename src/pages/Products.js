import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductsList from '../Components/ProductsList'

function Products() {
  
  const [data, setData] = useState({})
  const nav = useNavigate()

  return (<>

    <div style={{ textAlign: 'center', fontSize: "50px" }}>      
      מוצרים      
    </div>

    <ProductsList/>
    

  </>)
}

export default Products