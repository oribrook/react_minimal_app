import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

function FileLoader() {

    const [file, setFile] = useState()
    
    const handleSend = () => {
        const fd = new FormData()
        fd.append('file', file)
       
        const options = {
            headers: {'Accept': 'application/json'},
            method: 'POST',          
            body: fd,
        };
         
        fetch('http://127.0.0.1:8000/file', options)
        .then((res) => {
             res.json().then((resJ) => {
                 console.log(resJ) })                
       }).catch((e)=>{window.alert(`File save Error: ${e}`)})
    }


  return (
      <div>
          
          <input type="file" accept="image/*"
              onChange={(e) => { setFile(e.target.files[0]); }} />              
          <br/>
          <button onClick={handleSend} disabled={!file}> upload </button>                    
    </div>
  )

}

export default FileLoader