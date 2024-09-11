import NavbarBeforeSignIn from "./components/Navbar/NavbarBeforeSignIn";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import FrontPage from './components/FrontPage/FrontPage'
import LoginSignup from "./components/LoginSignUp/Signup";
import Login from "./components/LoginSignUp/Login";
import Signup from "./components/LoginSignUp/Signup";


function App(){


  return(
    <>
      <BrowserRouter>
    
      <NavbarBeforeSignIn/>

      <Routes>

        <Route path="/" element={<FrontPage /> } ></Route>

        <Route path="/signup" element={<Signup />} ></Route>

        <Route path="/login" element={<Login />}> </Route>



      </Routes>
    

    

      </BrowserRouter>

    </>


  
  )

}

export default App;


