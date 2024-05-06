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
        sx={{
          "& .MuiDrawer-paper": {
            height: "35%",
            borderRadius: "10px",
            transition:
              "height 0.3s ease-in-out, border-radius 0.3s linear, opacity 0.3s ease-in-out",
          },
        }}
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
  );
}
