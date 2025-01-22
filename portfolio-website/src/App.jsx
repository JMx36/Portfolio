import { Route, createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';


import HomePage from './pages/HomePage.jsx';
import GamingPortfolio from './pages/GamingPortfolio.jsx';
import SoftwarePortfolio from './pages/SoftwarePortfolio.jsx';
import MainLayout from './layouts/MainLayout';

// BrowserRouter for local development
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="gaming-portfolio" element={<GamingPortfolio />} />
      <Route path="software-portfolio" element={<SoftwarePortfolio />} />
    </Route>
  )
);

// BrowserRouter for deploy development
const deploy_router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="gaming-portfolio" element={<GamingPortfolio />} />
      <Route path="software-portfolio" element={<SoftwarePortfolio />} />
    </Route>
  ), 
  {
    basename: '/Portfolio/'
  }
);


const App = () => {
  return <RouterProvider router={deploy_router}/>;
}

export default App