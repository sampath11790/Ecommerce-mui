import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import classes from "./mobiletoggle.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceAction } from "../../Reduxstore/auth/Authslice";
import { ExitToAppSharp } from "@mui/icons-material";
export default function SwipeableTemporaryDrawer({ navItems }) {
  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthSliceAction.setAuth({ login: null, token: null }));
    navigate("/About");
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {login && (
          <Button onClick={toggleDrawer(false)}>
            <Cart></Cart>
          </Button>
        )}

        {login && (
          <IconButton onClick={logoutHandler} onKeyDown={toggleDrawer(false)}>
            <ExitToAppSharp sx={{ color: "blue" }}></ExitToAppSharp>
          </IconButton>
        )}
        {navItems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <NavLink
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className={classes.NavLink}
              to={text.path}
              style={{ textDecoration: "none", textAlign: "center" }}
              // activeClassName={classes.active}
            >
              <ListItemButton>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={text.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
