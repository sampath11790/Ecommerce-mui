import React, { forwardRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { CartSliceAction } from "../../Reduxstore/cart/cartslice";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertBox() {
  const Dispatch = useDispatch();
  const isopen = useSelector((state) => state.cart.open);
  console.log(isopen);
  //   const [open, setOpen] = React.useState(false);

  //setSuccessMessage,closeSuccessMessage

  //  useEffect(()=>{
  //     if(isopen){

  //     }

  //   },[isopen])

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    Dispatch(CartSliceAction.closeSuccessMessage());
  };

  return (
    <Stack spacing={2} sx={{ width: "80%" }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open
      </Button> */}
      <Snackbar open={isopen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "80%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
