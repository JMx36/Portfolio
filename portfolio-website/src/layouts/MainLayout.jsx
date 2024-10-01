import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { ScrollToTop } from '../components/utilities.jsx';

import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <> 
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}


export default MainLayout