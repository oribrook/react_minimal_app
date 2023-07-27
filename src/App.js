import { Navbar } from "react-bootstrap";
import Main from "./Main";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: window.screen.height}}>
      <div style={{
        maxWidth: "70%", margin: 'auto', textAlign: 'center', color: "white",        
      }}>
      <Navbar bg="dark" data-bs-theme="light">
        <Container style={{direction: 'rtl'}}>
          <Navbar.Brand href="#home" style={{color:"white"}}>משימות</Navbar.Brand>          
        </Container>
      </Navbar>
        <Main />
        </div>
    </div>
  );
}

export default App;
