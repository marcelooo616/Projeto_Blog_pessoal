import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';
import CadastroPost from './components/postagem/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import store from './store/Store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
       
          <div style={{ minHeight: '100vh' }}>
         <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/post" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
      
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
