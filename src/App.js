import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"



// Home
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>  
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>

    {/* <Home></Home> */}

    </Routes>
    <Footer/>
    </Router>
      );
}

export default App;
//41:13