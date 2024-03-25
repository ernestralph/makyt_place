import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  LoginPage,
  SignupPage,
  ActivationPage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
} from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';

const App = () => {
   const { loading } = useSelector(
     (state) => state.user
   );
  useEffect(()=>{
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {
        loading ?(null) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route
                path="/activation/:activation_token"
                element={<ActivationPage />}
              />
      
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:name" element={<ProductDetailsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
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
    </>
  );
}

export default App

