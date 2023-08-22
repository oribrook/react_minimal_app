import { useEffect, useState } from "react";
import MyInfinitScroll from "./MyInfiniteScroll";
import Notes from "./Notes";
import NotesWithoutPagination from "./NotesWithoutPagination";
import SiteRoutes from "./SiteRoutes";
import NavBar from "./NavBar";
import Test from "./Test";

function App() {    
  return (
    <div>

      <NavBar />
      <br/>
      <br/>
      <div style={{textAlign: 'center', backgroundColor: 'gray', padding: '2%'}}>
        <SiteRoutes/>
      </div>      
      
            
    </div>
  );
}

export default App;
