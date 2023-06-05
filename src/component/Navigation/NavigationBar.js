import React from "react";
import classes from "./NavigationBar.module.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink, useNavigate } from "react-router-dom/dist";
import SwipeableTemporaryDrawer from "../SupportPages/mobiletoggleMenu";
import Cart from "../Cart/Cart";
import { AuthSliceAction } from "../../Reduxstore/auth/Authslice";
import { CartSliceAction } from "../../Reduxstore/cart/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { ExitToAppSharp } from "@mui/icons-material";
// import AdbIcon from "@mui/icons-material/Adb";
const NavigationBar = () => {
  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthSliceAction.setAuth({ login: null, token: null }));
    Dispatch(CartSliceAction.setCallInitial());
    navigate("/About");
  };
  const navItems = [
    { path: "/Home", label: "Home" },

    { path: "/Store", label: "Store" },
    { path: "/About", label: "About" },
    { path: "/contactus", label: "Contact Us" },
    { path: "/Orders", label: "View oders" },
    { path: "/login", label: "Login" },
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
            {login && (
              <Button>
                <Cart></Cart>
              </Button>
            )}
            {/* {login && <Button >Logout</Button>} */}
            {login && (
              <IconButton onClick={logoutHandler}>
                <ExitToAppSharp sx={{ color: "blue" }}></ExitToAppSharp>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
