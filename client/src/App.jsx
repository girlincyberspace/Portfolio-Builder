import NavbarBeforeSignIn from "./components/Navbar/NavbarBeforeSignIn";
import NavbarAfterSignIn from "./components/Navbar/NavbarAfterSignIn";
import FrontPage from "./components/FrontPage/FrontPage";
import LoginSignup from "./components/LoginSignUp/LoginSignup";
import axios from "axios";
import { useEffect, useState } from "react";

function App(){


  return(
    <div className="container">
      <NavbarBeforeSignIn />
      <FrontPage />
    </div>
  )

}

export default App;