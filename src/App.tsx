import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';


function App() {
  return (
    <>
       
       <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
               <Route path="/" element={<Login />} />
               <Route path="/login" element={<Login />} />
               <Route path="/contato" element={<Contato />} />
               <Route path="/home" element={<Home/>}/>
               <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
               <Route path="/temas" element={<ListaTema/>}/>
               <Route path="/post" element={<ListaPostagem/>}/>
               
          </Routes>
        </div>
        <Footer />
      </Router>
    
    </>
  );
}

export default App;
