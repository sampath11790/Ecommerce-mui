import React from "react";
import cls from "./Orders.module.css";
import { useSelector } from "react-redux";
const OrdersPage = () => {
  const ordersList = useSelector((state) => state.order.orders);
  const token = localStorage.getItem("token");
  console.log("orders page", ordersList);
  return (
    <>
      <p>Orders page</p>
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </>
  );
};

export default OrdersPage;
