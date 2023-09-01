import { createContext, useEffect, useState } from "react";

import SiteRoutes from "./SiteRoutes";
import NavBar from "./NavBar";
import { validateToken } from "./client/auth";
import { ToastContainer } from "react-toastify";

export const appContext = createContext(null);

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    validateToken().then((response) => {
      if (response) {
        setUserLogged(true);
        setUserName(response.user);
      }
    });
  }, []);

  return (
    <div>
        <ToastContainer position='bottom-left' autoClose={500}/>

      <appContext.Provider
        value={{ userLogged, setUserLogged, userName, setUserName }}
      >
        <NavBar />
        <div
          style={{
            textAlign: "center",
            backgroundColor: "gray",
            padding: "2%",
          }}
        >
          <SiteRoutes />



        </div>
      </appContext.Provider>
      <br />
      <br />
    </div>
  );
}

export default App;
