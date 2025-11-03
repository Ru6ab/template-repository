import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Clients from "./components/Clients";
import CaseStudies from './components/CaseStudies'
import RecentWork from './components/RecentWork'
import Testimonials from './components/Testimonials';
import Form from "./components/Form";
import Footer from "./components/Footer";




function App () {
   return(

   <div className="flex flex-col bg-black  overflow-x-hidden  ">
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
