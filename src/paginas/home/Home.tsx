import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import "./Home.css";
import TabPostagem from "../../components/postagem/tabpostagem/TabPostagem";
import { useNavigate } from 'react-router';
import ModalPostagem from '../../components/postagem/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Voce precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            })
            navigate("/login")

        }
    }, [token])

    return (



        <>

            <div className="container"   >
                <div className="home">
                    <div className="texto"  >
                        <h3 >Seja bem vindo(a)!</h3>
                        <h5>expresse aqui os seus pensamentos e opiniões!</h5>
                    </div>
                <Box>
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>

                     <Link to="/post" className='text-decorator-none'>
                        <button >
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>feed</span>
                        </button>
                    </Link>
                </Box>
                    
                   
                </div>
                <div className="img" >
                    <img src="https://i.imgur.com/GxMP4HH.png" alt="" width="500px" height="500px" />

                </div>

            </div>

            <Grid item xs={12} className="postagens">
                <TabPostagem />
            </Grid>
        </>


    )
}

export default Home;