import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage, ActivationPage } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Store from './redux/store';
import { loadUser } from './redux/actions/user';

const App = () => {
  useEffect(()=>{
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
      </Routes>

      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </BrowserRouter>
  )
}

export default App

