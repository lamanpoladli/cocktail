import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {ROUTES} from "./routes/routes"
import { UserContextProvider } from './context/userContext';

const routes = createBrowserRouter(ROUTES) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <UserContextProvider><RouterProvider router={routes}></RouterProvider> </UserContextProvider>
  </>
);


