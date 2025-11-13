

'use client'
import './globals.css';
import {Navbar,
  MainSection,
  Clients,
  CaseStudies,
  Testimonials,
  RecentWork,
  Form,
  Footer} from './components'

export default function Home() {
  return (
    
     
     <div className="flex flex-col bg-black  overflow-x-hidden  ">
   
   <MainSection/> 
   <Clients/>     
    <CaseStudies/>     
    <Testimonials/>       
     <RecentWork/>  
    <Form/>
   
    </div>
   
  );
}
