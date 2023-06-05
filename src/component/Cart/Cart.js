import cls from "./Cart.module.css";

import React, { useEffect, useState } from "react";
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
  Delete,
  ShoppingCartSharp,
  TextIncreaseSharp,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../../Reduxstore/cart/cart-thunk";
import { postOrder } from "../../Reduxstore/order/order-thunk";
function Cart() {
  const Dispatch = useDispatch();
  const { cartproducts, callcart } = useSelector((state) => state.cart);
  // const { login, token } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");
  const login = localStorage.getItem("login");
  // console.log(data);
  const [state, setState] = useState({
    right: false,
  });
  let totalamount = 0;
  const cartdata = cartproducts.reduce((acc, cur) => {
    totalamount += cur.price * cur.cartitem.TotalQty;
    acc.push({
      id: cur.id,
      imageUrl: cur.imageUrl[0],
      title: cur.title,
      price: cur.price,
      TotalQty: cur.cartitem.TotalQty,
    });
    return acc;
  }, []);
  // console.log(callcart);
  useEffect(() => {
    if (login == "true" && callcart > 0) {
      // console.log("calling cart on action");
      Dispatch(getCart(token));
      return;
    }
  }, [callcart]);

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
    <Box sx={{ width: 300 }} role="presentation">
      <Button onClick={toggleDrawer(false)}>
        <Close></Close>
      </Button>

      <List>
        {cartdata.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <Box>
              <img width={100} height={100} src={item.imageUrl}></img>
            </Box>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={item.TotalQty} />
              <ListItemText primary={item.price} />
              <ListItemText primary={item.price * item.TotalQty} />
              <div>
                {/* <IconButton>
                  <ExpandLess />
                </IconButton>

                <IconButton>
                  <ExpandMore />
                </IconButton> */}
                <IconButton
                  onClick={() => Dispatch(deleteCart(item.id, token))}
                >
                  <Delete />
                </IconButton>
              </div>

              {/* <input type="number"></input> */}
              {/* <TextField InputLabelProps={{ shrink: true }} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        <span>Totel Price :{totalamount}</span>
        <Button variant="primary" onClick={() => Dispatch(postOrder(token))}>
          place Oreder
        </Button>
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
            {/* <MenuIcon /> */}
            <ShoppingCartSharp></ShoppingCartSharp>
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

export default React.memo(Cart);
