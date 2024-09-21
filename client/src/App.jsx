import NavbarBeforeSignIn from "./components/Navbar/NavbarBeforeSignIn";
import NavbarAfterSignIn from "./components/Navbar/NavbarAfterSignIn";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import Login from "./components/LoginSignUp/Login";
import Signup from "./components/LoginSignUp/Signup";
import Footer from "./components/footer";
import MyPortfolio from "./components/MyPortfolio";
import Template from "./components/Template";
import GraphicDesign from "./components/DesignTemplate/DesignTemplate";
import About from "./components/DesignTemplate/About";
import Contact from "./components/DesignTemplate/contact";
import GraphicDesignLayout from "./components/DesignTemplate/GraphicDesignLayout";
import MakeUpArtist from "./components/MakeUpArtist/MakeUpArtist";
import Layout from "./components/FashionDesigner/Layout";
import Home from "./components/FashionDesigner/Home";
import SummerCollection from "./components/FashionDesigner/SummerCollection";
import AboutFashionDesigner from "./components/FashionDesigner/About";
import ContactFashionDesigner from "./components/FashionDesigner/ContactFashionDesigner";
import DesignStudio from "./components/Design Studio/DesignStudio";
import CreativeStudio from "./components/Creative Studio/CreativeStudio";
import Photographer from "./components/Photographer/Photographer";
import IllustratorLayout from "./components/Illustrator/IllustratorLayout";
import IllustratorProjects from "./components/Illustrator/IllustratorProjects";
import IllustratorInfo from "./components/Illustrator/IllustratorInfo";

function App(){


  return(
    <>
      <BrowserRouter>
    
      <NavbarAfterSignIn/>

      <Routes>

        <Route path="/" element={<FrontPage /> } ></Route>

        <Route path="/signup" element={<Signup />} ></Route>

        <Route path="/login" element={<Login />}> </Route>

        <Route path="/manage-home" element={<MyPortfolio />} > </Route>

        <Route path="/templates" element={<Template />} > </Route>


        <Route element={<GraphicDesignLayout />} >

          <Route path="design-template" element={<GraphicDesign />} /> 
      
          <Route path="design-template/about-1" element={<About />} /> 

          <Route path="design-template/contact-1" element={<Contact />} />
        
        </Route>

        <Route path="/makeup-artist" element={<MakeUpArtist />} > </Route>

        <Route element={<Layout />} >
          
          <Route path="fashion-designer" element={<Home />} />

          <Route path="fashion-designer/about" element={<AboutFashionDesigner />} />

          <Route path="fashion-designer/spring-summer-collection" element={<SummerCollection />} />

          <Route path="fashion-designer/contact" element={<ContactFashionDesigner />}> </Route>

        </Route>

        <Route path="/design-studio" element={<DesignStudio />} />

        <Route path="/creative-studio" element={<CreativeStudio />} />

        <Route path="/photographer" element={<Photographer />} />

        <Route element={<IllustratorLayout />} >
          
          <Route path="illustrator" element={<IllustratorProjects />} />

          <Route path="illustrator/info" element={<IllustratorInfo />} />

        </Route>




      </Routes>
    

      <Footer />

      </BrowserRouter>

    </>


  
  )

}

export default App;


