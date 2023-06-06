import React, { useEffect } from "react";
import { child, Men, women } from "../../Data/Data";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Data from "../../Data/Data";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Badge, Box } from "@mui/material";
import {
  CurrencyRupee,
  ShoppingCart,
  ShoppingCartSharp,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getallProducts, postCart } from "../../Reduxstore/cart/cart-thunk";
import AlertBox from "../SupportPages/alert";
import { CartSliceAction } from "../../Reduxstore/cart/cartslice";
// import Catagory from "../SupportPages/Catagory";
// import Cart

export default function Store() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    products: data,
    open,
    addcart_btn_Data: btnData,
  } = useSelector((state) => state.cart);
  const { login, token } = useSelector((state) => state.auth);

  const postCartHandler = (id) => {
    if (login == "true") {
      Dispatch(postCart(id, token));
      Dispatch(CartSliceAction.setSuccessMessage());
      return;
    }
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        flexGrow: 1,
        height: "100%",
        margin: { xs: 2, md: 2 },
      }}
    >
      {/* <Catagory></Catagory> */}
      {data.map((item) => (
        <Card
          sx={{ maxWidth: { xs: 125, md: 245 }, m: { xs: 1, md: 1 }, p: 0 }}
          key={item.id}
        >
          <NavLink
            to="StoreItem"
            state={item}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            {/* <CardHeader /> */}
            <CardMedia
              component="img"
              height="310"
              width="400"
              image={item.imageUrl[0]}
              alt="Paella dish"
            />
          </NavLink>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.title} <CurrencyRupee />
              {item.price}
              {item.id == 2 ? ".00" : ""}
              <span style={{ fontSize: 10, fontWeight: "bold" }}></span>
            </Typography>
          </CardContent>
          <CardActions sx={{ bg: "yellow" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
              {btnData[item.id] != undefined && (
                <Badge
                  badgeContent={
                    btnData[item.id] != undefined ? btnData[item.id] : ""
                  }
                  color="error"
                ></Badge>
              )}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              sx={{ display: { xs: "none", md: "flex" } }}
              aria-label="share"
              onClick={() => postCartHandler(item.id)}
            >
              <span style={{ fontSize: 18, padding: 0, margin: 0 }}>
                Add Cart
              </span>
              <ShoppingCart sx={{ color: "orange", bg: "green" }} />
            </IconButton>
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              aria-label="share"
              onClick={() => postCartHandler(item.id)}
            >
              <ShoppingCart sx={{ color: "orange", bg: "green" }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
