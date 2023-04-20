import { createContext, useState } from "react";
import Navbar from "./Navbar";
import SiteRoutes from "./SiteRoutes";

import "./styles.css"

export const AppContext = createContext(null)

const initData = [{type: 'Toyota', year: '2018'}, {type: 'Suzuki', year: 2011}]

function App() {  
  const [data, setData] = useState(initData)
  
  return (<>
    
    <AppContext.Provider value={{ data, setData }}>
      
      <Navbar />    
      <SiteRoutes />    

    </AppContext.Provider>

    </>);
}

export default App;
