import { useState } from "react";
import FileLoader from "./FileLoader";
import DropZoneFileLoader from "./DropZoneFileLoader";
import MultipleFilesLoader from "./MultipleFilesLoader";

function App() {
  return (
    <div>
      <hr />
      <p> Standard file uploader </p>
      <br />
      <FileLoader />
      <br />
      <br />
      <br />
      <hr />
      <p> Dropzone file uploader </p>
      <br />
      <DropZoneFileLoader />
      <br />
      <br />
      <br />
      <hr />
      <div> Multiple files uploader </div>
      <br />
      <br />
      <MultipleFilesLoader />
    </div>
  );
}

export default App;
