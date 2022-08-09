import React from 'react';
import "../navbar/Navbar.css";
import { Box, Paper, Toolbar, Typography, AppBar } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {


    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponentLogado;
    var navbarComponentDeslogado;

    if (token !== "") {

        navbarComponentLogado = <AppBar position="static">
            <Toolbar className='header' variant="dense">
                <div className="containerBlog">
                    <div className="Box" style={{ cursor: "pointer" }}>
                        <h2 className='tela'>
                            Blog Pessoal
                        </h2>

                    </div>

                </div>

                <div className="containerNav">

                    <div className="Box" style={{ cursor: "pointer" }}>
                        <h2>
                            <Link to='/home'>home</Link>
                        </h2>
                    </div>
                    <div className="Box" style={{ cursor: "pointer" }}>
                        <h2>
                            <Link to='/post'>feed</Link>
                        </h2>
                    </div>
                    <div className="Box" style={{ cursor: "pointer" }}>
                        <h2>
                            <Link to='/temas'>temas</Link>
                        </h2>
                    </div>
                    <div className="Box" style={{ cursor: "pointer" }}>
                        <h2>
                            <Link to='/formularioTema'>cadastrar tema</Link>
                        </h2>
                    </div>

                    <div className="Box" style={{ cursor: "pointer" }} onClick={goLogout}>
                        <h2 >
                            <a >logout</a>
                        </h2>
                    </div>


                </div>

            </Toolbar>
        </AppBar>

    }else{

        navbarComponentDeslogado =  <AppBar position="static">
        <Toolbar className='headerLogin' variant="dense">
            <div className="containerBlogLogin">
                <div className="Box" style={{ cursor: "pointer" }}>
                    <h2 className='tela'>
                        Blog Pessoal
                    </h2>

                </div>

            </div>

            <div className="containerNavLogin"> 
                <div className="Box" style={{ cursor: "pointer" }}>
                    <h2>
                        <Link to='/cadastrousuario'>cadastre-se</Link>
                    </h2>
                </div>

                


            </div>

        </Toolbar>
    </AppBar>



    }

    return (
        <>
             {navbarComponentLogado}
             {navbarComponentDeslogado}
        </>
    );
}

export default Navbar;


