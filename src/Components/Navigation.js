import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useState } from 'react';

export default function DenseAppBar() {
  const[isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: 'rgb(252, 240, 225)' }} >
        <Toolbar variant="dense" className='menu'>
            <div className='hamburger'>
            <IconButton edge="start" color="" aria-label="menu" sx={{ mr: 2 }} onClick={()=> setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            </div>
            <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose= {()=> setIsDrawerOpen(false)}
            >
              <Box
              p={2}
              width='200px'
              textAlign='center'
              role='presentation'
              >
                <Typography variant='h6' component='div'>
                  Menu
                  <ul className='drawer-menu-list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shopping</a></li>
                    <li><a href="#">Travel List</a></li>
                  </ul>
                </Typography>
              </Box>
            </Drawer>
            <div className='nav-bar'>
              <ul className='nav-list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shopping</a></li>
                <li><a href="#">Travel List</a></li>
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
