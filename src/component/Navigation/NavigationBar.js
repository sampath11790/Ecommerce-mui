import React from "react";
import classes from "./NavigationBar.module.css";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom/dist";
import SwipeableTemporaryDrawer from "../SupportPages/mobiletoggleMenu";
// import AdbIcon from "@mui/icons-material/Adb";
const NavigationBar = () => {
  const navItems = [
    { path: "/Home", label: "Home" },
    { path: "/login", label: "Login" },
    { path: "/Store", label: "Store" },
    { path: "/About", label: "About" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: { xs: "start", md: "space-around" },
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

          <SwipeableTemporaryDrawer
            navItems={navItems}
          ></SwipeableTemporaryDrawer>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <List sx={{ display: "flex", flexDirection: "row" }}>
              {navItems.map((item, index) => (
                <ListItem key={item.path}>
                  <NavLink
                    className={classes.NavLink}
                    to={item.path}
                    style={{ textDecoration: "none", textAlign: "center" }}
                    activeClassName={classes.active}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
