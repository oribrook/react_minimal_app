import SiteRoutes from "./SiteRoutes";
import NavBar from "./NavBar";


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
