import React from 'react'

export default function ImageSwapper(props) {
    console.log("ImageSwapper rendered")
  return (
      <div>
          {props.counter % 2 == 0 ?
           <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
              :
           <img src='https://cdn.pixabay.com/photo/2023/03/04/15/53/duck-7829778_640.jpg'/>}
      </div>
  )
}