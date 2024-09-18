import { Route, createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';


import HomePage from './pages/HomePage.jsx';
import GamingPortfolio from './pages/GamingPortfolio.jsx';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="index.html" element={<HomePage />} />
      <Route path="gaming-portfolio" element={<GamingPortfolio />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App