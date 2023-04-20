import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'


function DropZoneFileLoader() {
    const [file, setFile] = useState(null);

    // function to handle file drop and set the selected file state
    const handleDrop = (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    };
  
    // function to handle file upload using fetch
    const handleUpload = () => {
      if (file) {
        const formData = new FormData();
          formData.append('file', file);        
  
        fetch('http://127.0.0.1:8000/file', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }
    };
  
    // useDropzone hook to create a dropzone area for selecting files
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: handleDrop,
      accept: 'image/*, application/pdf',
    });
  
    return (<>
      <div {...getRootProps()} style={{border: 'black dashed 3px', maxWidth: '30%'}}>
        <input {...getInputProps()} />
        
            {isDragActive ?
                (<p>Drop the file here ...</p>)
                :
                (<p style={{ textAlign: 'center' }}>גרור קובץ לכאן </p>)
            }
            
            {file && <p>Selected file: {file.name}</p>}
            
        </div>
  
        <button onClick={handleUpload} disabled={!file}>
          Upload
        </button>
  </>);
}



export default DropZoneFileLoader