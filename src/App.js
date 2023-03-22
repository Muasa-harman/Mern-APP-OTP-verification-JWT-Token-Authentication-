import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Password from './components/Password';
// import Profiles from './components/Profiles';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';
import PageNotFound from './components/PageNotFound'
import Profile from './components/Profile';

// roote router
const router = createBrowserRouter([
  {
    path:'/',
    element: <><Username/></>
  },
  {
    path:'/password',
    element: <><Password/></>
  },
  {
    path:'/profile',
    element: <><Profile/></>
  },
  {
    path:'/register',
    element: <><Register/></>
  },
  {
    path:'/reset',
    element: <><Reset/></>
  },
  {
    path:'/pagenotfound',
    element: <><PageNotFound/></>
  },
  {
    path:'/recovery',
    element: <><Recovery/></>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
