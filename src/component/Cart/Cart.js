import cls from "./Cart.module.css";

import React, { useEffect, useState } from "react";

import {
  Badge,
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

import { IconButton } from "@mui/material";

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
  const {
    cartproducts: cartdata,
    callcart,
    totalcartitem,
    totalamount,
  } = useSelector((state) => state.cart);
  // const { login, token } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");
  const login = localStorage.getItem("login");
  // console.log(data);
  const [state, setState] = useState({
    right: false,
  });

  useEffect(() => {
    if (login == "true" && callcart > 0) {
      // console.log("calling cart on action");
      Dispatch(getCart(token));
      return;
    }
  }, [callcart]);

  const OrderHandler = (id) => {
    window.confirm("are you sure to order this product");
    Dispatch(postOrder(token));
  };
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
        <Box sx={{ marginTop: 2 }}>
          <span style={{ fontSize: 20, marginTop: 5 }}>
            Totel Price =<span>{totalamount}</span>
          </span>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" onClick={() => OrderHandler()}>
            place Order
          </Button>
        </Box>
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

            <Badge badgeContent={totalcartitem} color="error">
              <ShoppingCartSharp></ShoppingCartSharp>
            </Badge>
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
