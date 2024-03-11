
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Footer from './Footer';



const Layout = () => {

  return (
    <div>
      <Toaster />
      <Header />
      <div className="min-h-[1000px] bg-[#B4D9CB]">
      
          <Outlet />

          
      </div>
      <Footer />
    </div>
  )
}

export default Layout