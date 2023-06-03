import cls from "./Cart.module.css";

import React from "react";
// import Box from "@mui/material/Box";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// // import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { ArrowDropUpIcon } from "@mui/icons-material/ArrowDropUp"; // ArrowDropDownIcon,
// import { ArrowDropDownIcon } from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { child, Men } from "../../Data/Data";
import {
  Close,
  CloseFullscreenRounded,
  Delete,
  ExpandLess,
  ExpandMore,
  TextIncreaseSharp,
} from "@mui/icons-material";
export default function Cart() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <Button onClick={toggleDrawer(false)}>
        <Close></Close>
      </Button>

      <List>
        {child.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <Box>
              <img width={100} height={100} src={text.imageUrl[0]}></img>
            </Box>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={"Qty"} />
              <ListItemText primary={"price"} />
              <div>
                <IconButton>
                  <ExpandLess />
                </IconButton>

                <IconButton>
                  <ExpandMore />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </div>

              {/* <input type="number"></input> */}
              {/* <TextField InputLabelProps={{ shrink: true }} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        <span>Totel Price</span>
        <Button variant="primary">place Oreder</Button>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box
          //   sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
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
          anchor="right"
          open={state.right}
          //   onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
