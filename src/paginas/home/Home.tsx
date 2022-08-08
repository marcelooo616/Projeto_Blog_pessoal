import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import "./Home.css";
import TabPostagem from "../../components/postagem/tabpostagem/TabPostagem";
import { useNavigate } from 'react-router';
import ModalPostagem from '../../components/postagem/modalPostagem/ModalPostagem';
import useLocalStorage from 'react-use-localstorage';


function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
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

                    <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                    <button className="button">
                        <span  className="shadow"></span>
                        <span  className="edge"></span>
                        <span  className="front text"> Ver Postagens
                        </span>
                    </button>
                </div>
                <div className="img" >
                    <img src="https://i.imgur.com/GxMP4HH.png" alt="" width="500px" height="500px" />

                </div>
                
            </div>

            <Grid item xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
        </>


    )
}

export default Home;