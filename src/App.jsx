import React, { useContext } from 'react'
import Navbar from './pages/Navbar'
import { Outlet, useLocation } from 'react-router'
import { SnackbarWrapper } from './others/SnackBar'
import Footer from './components/Footer'



const App = () => {
  const location = useLocation();

  return (
    <>
      <SnackbarWrapper>
        <Navbar />
        <Outlet />
      </SnackbarWrapper>
      {
        location.pathname === '/cart' ? null : <Footer />
      }

    </>
  )
}

export default App