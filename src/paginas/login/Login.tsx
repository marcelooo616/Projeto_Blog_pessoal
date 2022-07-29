import React from 'react';
import {Grid,  TextField, Button} from '@material-ui/core';
import {Box} from "@mui/material";
import {Link} from 'react-router-dom';
import "../login/Login.css";
function Login(){
    return (
        <>
            <Grid className=" containerLogin" direction='row'>
                <Grid xs = {6}>
                    <div className='cardLogin'  >
                        <form className='enter'>

                            <h2>Enter</h2>
                            <TextField className='login' id='usuario' label="usuario" variant='outlined' name='usuairo' fullWidth />
                            <TextField className='senha' id='senha' label="senha" variant='outlined' name='senha' type="password" fullWidth />
                             
                             <div className='paddingX' >
                                <Link to='/home' className='text-decorator-none'>
                                    <Button>
                                        Logar
                                    </Button>
                                </Link>
                             </div>
                        </form>
                    </div>
                </Grid>

                <div>

                </div>
            </Grid>
        </>
    )
}

export default Login;