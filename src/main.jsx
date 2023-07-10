import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Navigation from './components/navigation.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Articles from './components/Articles.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <Navigation />
  },
  
  {
    path:"/about",
    element: <AboutMe />
  },
  {
    path:"/articles",
    element: <Articles />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);