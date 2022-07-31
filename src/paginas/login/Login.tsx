import React from 'react';
import {Grid,  TextField, Button} from '@material-ui/core';
import {Box} from "@mui/material";
import {Link} from 'react-router-dom';
import "../login/Login.css";
function Login(){
    return (
        <>
            <Grid className=" containerLogin" >
                <Grid xs = {6}>
                    <div className='cardLogin'  >
                    <div className='box'>
                        <form className='form'>
                        
                            <h2>Enter</h2>
                            <div className='div'>
                                <div className='div2'>
                            <TextField className='login' id='usuario' label="usuario" variant='outlined' name='usuairo'  fullWidth />
                               </div>
                            <TextField className='senha' id='senha' label="senha" variant='outlined' name='senha' type="password" fullWidth />
                            </div>
                             <div className='paddingX' >
                                <Link to='/home' className='text-decorator-none'>
                                <button>
                                    <span className="shadow"></span>
                                    <span  className="edge"></span>
                                    <span  className="front text"> Logar
                                     </span>
                                </button>
                                </Link>
                             </div>
                             
                        </form>
                        </div>
                        </div>
                        
                    
                   
                </Grid>

                <Grid xs = {6}>
                    <img src='https://i.imgur.com/qtd3a9w.png'  width="500px" height="450px"/>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;