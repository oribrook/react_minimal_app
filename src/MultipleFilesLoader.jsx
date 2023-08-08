import React, { useState } from "react";


const handleSend = (files, clearFunc) => {
    const fd = new FormData();

    files.forEach((file) => {
      fd.append("files", file);
    });

    const options = {
      headers: { Accept: "application/json" },
      method: "POST",
      body: fd,
    };

    fetch("http://127.0.0.1:8000/files", options)
      .then((res) => {
        res.json().then((resJ) => {
          alert(resJ);
        });
      })
      .catch((e) => {
        alert(`File save Error: ${e}`);
      });
    
      clearFunc([])
};
  

const MultipleFilesLoader = () => {
  const [files, setFiles] = useState([]);

  const handleFilesChanges = (e) => {
    const new_files = e.target.files;
    console.log(new_files[0].name);
    setFiles([...new_files, ...files]);
    e.target.value = [];
  };

  const handleRemove = (fileName) => {
    const newFiles = files.filter((f) => {
      return f.name !== fileName;
    });
    setFiles(newFiles);
  };

  return (
    <div>
      <input
        id="lfiles"
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFilesChanges}
      />
      <label htmlFor="lfiles" style={{ backgroundColor: "green" }}>
        לחץ להוספת קבצים{" "}
      </label>

      {files.length !== 0 && (
        <div>
          {files.map((f) => {
            return (
              <div>
                <button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    handleRemove(f.name);
                  }}
                >
                  remove
                </button>
                {f.name}
              </div>
            );
          })}
        </div>
      )}
      <br />

      <button onClick={()=>handleSend(files, setFiles)} disabled={files.length === 0}>
        upload
      </button>
    </div>
  );
};

export default MultipleFilesLoader;
