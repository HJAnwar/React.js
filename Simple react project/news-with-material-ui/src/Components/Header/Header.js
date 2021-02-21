import React from 'react';
import './Header.css';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



const Header = () => {


    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" > News  </Typography>
                    <Button  id="btn" color="inherit">Breking </Button>
                    <Button  id="bntStyle" color="inherit">Hot News</Button>
                    <Button  id="bntStyle" color="inherit">Contact-us</Button>
                    <Button  id="bntStyle" color="inherit">About-us</Button>
                    <Button  id="bntStyle" color="inherit">Your-Info</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
};

export default Header;