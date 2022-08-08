import React from 'react';
import "../navbar/Navbar.css";
import { Box, Paper, Toolbar, Typography, AppBar } from "@mui/material";
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')
    }


    return (
        <>
            <AppBar position="static">
                <Toolbar className='header' variant="dense">
                    <div className="containerBlog">
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2 className='tela'> 
                               Blog Pessoal
                            </h2>
                            
                        </div>

                    </div>

                    <div className="containerNav">

                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                 <a href='/home'>home</a>
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                               <a href='/post'>postagens</a> 
                            </h2>
                        </div>
                        <div className="Box"  style={{ cursor: "pointer" }}>
                            <h2>
                                 <a href='/temas'>temas</a> 
                            </h2>
                        </div>
                        <div className="Box" style={{ cursor: "pointer" }}>
                            <h2>
                                 <a href='/formularioTema'>cadastrar tema</a> 
                            </h2>
                        </div>
                        
                        <div className="Box"  style={{ cursor: "pointer" }}  onClick={goLogout}>
                            <h2 >
                                    <a href=''>logout</a>     
                            </h2>
                        </div>
                       

                    </div>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;