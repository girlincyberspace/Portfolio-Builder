import NavBar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";

function App(){

  useEffect(() => {
    axios.get("http://localhost:3001/users"),then((response) => {
      console.log(response);
    })
  }, [])
  return(
    <div>
      <NavBar />
    </div>
  )

}

export default App;