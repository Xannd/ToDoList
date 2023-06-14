import React from 'react';
import HomePage from './pages/homePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='screen'>
      <HomePage/>
      <ToastContainer limit={3}/>
    </div>
  )
}

export default App
