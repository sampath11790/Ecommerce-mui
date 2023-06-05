import React, { useEffect } from "react";
import cls from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../Reduxstore/order/order-thunk";
import { Box, List, ListItem, ListItemText } from "@mui/material";
const OrdersPage = () => {
  const Dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { orders: ordersList, getorder } = useSelector((state) => state.order);
  useEffect(() => {
    Dispatch(getOrder(token));
  }, [getorder]);

  // console.log("orders page", ordersList);
  const boxstyle = {
    width: "100vw",
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 2px 4px lightgreen",
    padding: "7px",
    borderRadius: "8px",
    background: "lightblue",
    // margin: "0 auto",
  };

  const ExtractTime = (date) => {
    const currentDate = new Date(date);
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();

    const dateTimeString = dateString + " " + timeString;
    return dateTimeString;
  };
  return (
    <>
      <List sx={{ width: "100%" }}>
        {ordersList.map((item, index) => (
          <ListItem>
            <Box sx={boxstyle}>
              <ListItemText>Order Id :{item.id}</ListItemText>
              <ListItemText>TotalAmount :{item.Totalamount}</ListItemText>
              <ListItemText>
                Ordered Date :{ExtractTime(item.createdAt)}
              </ListItemText>
              <ListItemText>
                Status{" "}
                {ordersList.length > index + 2
                  ? "Delivered"
                  : "Under process.."}
              </ListItemText>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default OrdersPage;
