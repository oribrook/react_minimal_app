import React, { useState } from "react";
import { Nav } from "react-bootstrap";

function BSNav() {
  const [tab, changeTab] = useState("opt2");

  return (
    <>
      <div style={{ maxWidth: "400px", margin: 'auto' }} >
        <Nav
          justify  
          variant="tabs"
          defaultActiveKey="opt2"
          onSelect={(selected) => changeTab(selected)}
        >
          <Nav.Item>
            <Nav.Link eventKey="opt1"> כתובת </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="opt2"> טלפון </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="opt3"> אימייל </Nav.Link>
          </Nav.Item>
        </Nav>
        <br/>
        {tab == "opt1" && <p> ירושלים, בית ברל </p>}
        {tab == "opt2" && <p> 0505050550 </p>}
        {tab == "opt3" && <p> no_email@email.com </p>}
      </div>
    </>
  );
}

export default BSNav;
