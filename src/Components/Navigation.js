import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: 'rgb(252, 240, 225)' }} >
        <Toolbar variant="dense" className='menu'>
            <div className='hamburger'>
            <IconButton edge="start" color="" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            </div>
            <div className='nav-bar'>
              <ul className='nav-list'>
                <li>Home</li>
                <li>Shopping</li>
                <li>Travel List</li>
              </ul>
            </div>
        </Toolbar>
        <Typography variant="h6" color="inherit" component="div">
            {/* add text later on if needed */}
          </Typography>
      </AppBar>
      
    </Box>
  );
}
