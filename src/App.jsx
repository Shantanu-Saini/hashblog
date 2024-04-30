import React, { useEffect, useState } from 'react'
import conf from './conf/config.js';
import { Header, Footer } from "./components/index.js"
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.user.js';
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        }
        else {
          dispatch(logout());
        }
      })
      .catch(() => console.warn('No user data found'))
      .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-700'>
      <div className='w-full block text-white'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;