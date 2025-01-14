import { React, useEffect} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { ScrollToTop } from '../components/utilities.jsx';

import { Outlet, useNavigate } from 'react-router-dom';


const MainLayout = () => {

  const navigate = useNavigate();


  console.log("Navigate to the work");
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get('redirect');
    if (redirectPath) {
      navigate(`${redirectPath}`);
    }
  }, [navigate]);


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