
import './index.css'
import {CaseStudies} from "./components/CaseStudies";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import RecentWork from "./components/RecentWork";
import Testimonials from "./components/Testimonials";
import MainSection from './components/MainSection';

function App () {
   return(
   
   <div className="min-h-screen flex flex-col bg-black overflow-hidden ">
   <Navbar/>
   <MainSection/>
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
