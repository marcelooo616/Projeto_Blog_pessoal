import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <>
       
       <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/home" element={<Home/>}/>
               
          </Routes>
        </div>
        <Footer />
      </Router>
    
    </>
  );
}

export default App;
