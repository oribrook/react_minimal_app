import { useState } from "react";
import FileLoader from "./FileLoader";
import DropZoneFileLoader from "./DropZoneFileLoader";

function App() {
  const [byDrop, setByDrop] = useState(false)
  return (
    <div>
      <button onClick={() => { setByDrop((prev) => { return !prev }) }}> change upload style </button>
      <br /><br /><br />
      <hr/>
      
      {!byDrop && <FileLoader />}
      
      {byDrop && <DropZoneFileLoader/>}
    </div>
  );
}

export default App;
