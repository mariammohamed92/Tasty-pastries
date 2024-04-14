import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home.jsx';
import Tasty from './component/Tasty/Tasty.jsx';
import Work from './component/Work/Work.jsx';
import About from './component/About/About.jsx';
import Recipes from './component/Recipes/Recipes.jsx';
import Testymonials from './component/Testymonials/Testymonials.jsx';
import Contact from './component/Contact/Contact.jsx';

function App() {
  const routes = createBrowserRouter([
    {path:'/',element: <Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'tasty',element:<Tasty/>},
      {path:'work',element:<Work/>},
      {path:'about',element:<About/>},
      {path:'recipes',element:<Recipes/>},
      {path:'testymonials',element:<Testymonials/>},
      {path:'contact',element:<Contact/>},
    ]}
  ])

  return (
    <>
   <RouterProvider router={routes}/>
    </>
  );
}

export default App;
