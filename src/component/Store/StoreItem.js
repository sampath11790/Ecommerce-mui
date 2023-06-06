import {
  Badge,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import cls from "./StoreItem.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyRupee, StarBorder } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../../Reduxstore/cart/cart-thunk";
import { CartSliceAction } from "../../Reduxstore/cart/cartslice";
const StoreItem = (props) => {
  const Dispatch = useDispatch();
  // const data = useSelector((state) => state.cart.products);
  const { state } = useLocation();
  // console.log(state);
  const [image, setimage] = useState(state.imageUrl[0]);
  const navigate = useNavigate();
  const { login, token } = useSelector((state) => state.auth);
  const { addcart_btn_Data: btnData } = useSelector((state) => state.cart);

  const postCartHandler = (id) => {
    if (login == "true") {
      Dispatch(postCart(id, token));
      Dispatch(CartSliceAction.setSuccessMessage());
      document.activeElement.blur();
      return;
    }
    navigate("/login");
  };
  return (
    <>
      <div className={cls.main_container}>
        <div className={cls.big_image_container}>
          <div className={cls.small_image_container}>
            {state.imageUrl.map((item, index) => (
              <img onClick={() => setimage(item)} src={item}></img>
            ))}
          </div>
          <div className={cls.largeimage}>
            <img src={image}></img>
          </div>
        </div>
        <div className={cls.item_title}>
          <p>{state.title}</p>
        </div>
        <div className={cls.des_cont}>
          <p className={cls.image_des}>
            Discover our stunning collection of dresses designed to make a
            lasting impression. From the elegant floral print maxi to the
            timeless classic black dress, and the breezy bohemian midi to the
            glamorous off-shoulder evening gown, we have the perfect dress for
            every occasion. Elevate your style with our carefully curated
            selection and make a statement wherever you go
          </p>
          <div className={cls.des_cont_child}>
            <div className={cls.price_rating}>
              <span> Price:</span>
              <span>
                <CurrencyRupee></CurrencyRupee>
              </span>
              <span>{state.price}</span>
            </div>
            <div>
              <span> Rating:</span>
              <span>
                {[...Array(5)].map((_, index) =>
                  state.rating > index ? (
                    <StarIcon sx={{ color: "gold" }} />
                  ) : (
                    <StarBorder sx={{ color: "gold" }} />
                  )
                )}
              </span>
            </div>

            <div className={cls.btn_container}>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {btnData[state.id] != undefined ? (
                    <Badge
                      badgeContent={
                        btnData[state.id] != undefined ? btnData[state.id] : ""
                      }
                      color="error"
                    >
                      <Button
                        variant="contained"
                        sx={{ background: "gold", color: "black", m: 1, p: 2 }}
                        onClick={() => postCartHandler(state.id)}
                      >
                        Add Cart
                      </Button>
                    </Badge>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{ background: "gold", color: "black", m: 1, p: 2 }}
                      onClick={() => postCartHandler(state.id)}
                    >
                      Add Cart
                    </Button>
                  )}
                </IconButton>
              </div>
              <div>
                <FormControl sx={{ minWidth: 80, mt: 1 }}>
                  <InputLabel id="demo-select-small-label">Age</InputLabel>
                  <Select
                    //   value={age}
                    //   onChange={handleChange}
                    //   displayEmpty
                    inputProps={{ "aria-label": "size" }}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>xs</MenuItem>
                    <MenuItem value={20}>s</MenuItem>
                    <MenuItem value={30}>m</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={cls.small_image_container}>
          {state.imageUrl.map((item, index) => (
            <img onClick={() => setimage(item)} src={item}></img>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default StoreItem;
