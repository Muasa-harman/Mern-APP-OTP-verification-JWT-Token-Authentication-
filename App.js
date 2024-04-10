import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Password from './src/components/Password';
// import Profiles from './components/Profiles';
import Recovery from './src/components/Recovery';
import Register from './src/components/Register';
import Reset from './src/components/Reset';
import Username from './src/components/Username';
import PageNotFound from './src/components/PageNotFound'
import Profile from './src/components/Profile';

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
