import React, { useEffect ,useState} from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
// loadStripe
// StripeWrapper
// Home
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Register from './pages/User/Register';
import store from './store';
import { loadUser } from './Actions/userAction';
import Account from './pages/User/Account';
// import ProtectedRoute from './Components/Route/protectedRoute';
import PrivateRoutes from './Components/Route/PrivateRoutes.js';
import UpdateProfile from"./pages/User/UpdateProfile";
import Cart from"./pages/Cart/Cart.jsx";
import Shipping from './pages/User/Shipping.jsx';
import ConfirmOrder from './pages/Cart/ConfirmOrder.jsx';
import Payments from './pages/Cart/Payments.jsx';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import StripeWrapper from './pages/Cart/StripeWrapper.jsx';
function App() {

  const user=useSelector(state=>state.user)
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  

  useEffect(() => {
    store.dispatch(loadUser())

    getStripeApiKey()
  
   
  }, [])

  // console.log(user);
  
  return (

    <Router>
    <Navbar user={user} />
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />

      {/* Protected Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path='/account' element={<Account />} />
        <Route path='/me/update' element={<UpdateProfile />} />
        <Route path='/login/shipping' element={<Shipping />} />
        <Route path='/order/confirm' element={<ConfirmOrder/>} />
        <Route path='/process/payment' element={<StripeWrapper stripeApiKey={stripeApiKey} />} />
        
        {/* <Route path='/process/payment' element={<Payments/>} /> */}
          
        
      </Route>
    </Routes>
    <Footer />
  </Router>

      );
}

export default App;
//41:13