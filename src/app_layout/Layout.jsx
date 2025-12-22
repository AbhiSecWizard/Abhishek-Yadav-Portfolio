import React from 'react';
import { Header } from './Header';
import { Home } from '../Pages/Home';
import { Project } from '../Pages/Project';
import { Contact } from '../Pages/Contact';
import { Footer } from './Footer';
import {About} from "../Pages/About";
// import { Skills } from '../Pages/Skills'
export const Layout = () => {
  return (
    <div>
      <Header />
       <Home/>
       <About/>
       <Project/>
       <Contact/>
      <Footer />
    </div> 
    )
}