import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";

export default function DenseAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="hamburger">
        <IconButton
          edge="start"
          color=""
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="200px" textAlign="center" role="presentation">
          <Typography
            variant="h6"
            component="div"
            className="drawer-menu-title"
          >
            Menu
          </Typography>
          <Typography variant="p" component="div">
            <ul className="drawer-menu-list">
              <li>
                <a
                  href="https://www.futurelearn.com/info/blog/how-to-be-more-productive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Productivity Tips
                </a>
              </li>
              <li>
                <a
                  href="https://suninme.org/true-story"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inspiring stories
                </a>
              </li>
              <li>
                <a href="#">Completed list</a>
              </li>
            </ul>
          </Typography>
        </Box>
      </Drawer>
    </>

    // ****** Appbar - removed as it did not fit the design ***********

    // <Box sx={{ flexGrow: 1 }} >
    //   <AppBar position="static" sx={{ bgcolor: 'rgb(252, 240, 225)' }} >
    //     <Toolbar variant="dense" className='menu'>

    //         <div className='nav-bar'>
    //           <ul className='nav-list'>
    //             <li><a href="https://www.futurelearn.com/info/blog/how-to-be-more-productive" target="_blank" rel="noopener noreferrer">Productivity Tips</a></li>
    //             <li><a href="https://suninme.org/true-story" target="_blank" rel="noopener noreferrer">Inspiring stories</a></li>
    //             <li><a href="#">Completed list</a></li>
    //           </ul>
    //         </div>
    //     </Toolbar>
    //     <Typography variant="h6" color="inherit" component="div">
    //         {/* add text later on if needed */}
    //       </Typography>
    //   </AppBar>

    // </Box>
  );
}
