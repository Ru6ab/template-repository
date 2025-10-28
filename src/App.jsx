
import './index.css'
import {CaseStudies} from "./components/CaseStudies";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero2 from "./components/Hero2";
import Navbar2 from "./components/Navbar2";
import RecentWork from "./components/RecentWork";
import Testimonials from "./components/Testimonials";
function App () {
   return(
   
   <div className="min-h-screen flex flex-col bg-black overflow-hidden ">
   <Navbar2/>
   <Hero2/>
   <Clients/>
   <CaseStudies/>
   <Testimonials/>
   <RecentWork/>
   <Form/>
   <Footer/>
   
   </div>
   
  
  
   )
}
export default App;
