import React from "react";
import classes from "./NavigationBar.module.css";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom/dist";
import SwipeableTemporaryDrawer from "../SupportPages/mobiletoggleMenu";
import Cart from "../Cart/Cart";
// import AdbIcon from "@mui/icons-material/Adb";
const NavigationBar = () => {
  const navItems = [
    { path: "/Home", label: "Home" },
    { path: "/login", label: "Login" },
    { path: "/Store", label: "Store" },
    { path: "/About", label: "About" },
    { path: "/contactus", label: "Contact Us" },
    { path: "/Orders", label: "View oders" },
  ];

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            justifyContent: { xs: "start", md: "space-around" },
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography>Ecom</Typography> */}
          <SwipeableTemporaryDrawer
            navItems={navItems}
          ></SwipeableTemporaryDrawer>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "monospace" }}
          >
            FashionFusion
          </Typography>
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
                    // activeClassName={classes.active}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Cart></Cart>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
