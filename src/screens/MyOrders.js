import React from "react";
import "./MyOrders.css";

const MyOrders = () => {
  return (
    <div className="myorders">
      <div className="account">
        <h1 style={{ color: "rgb(31, 163, 70)" }}>My Account</h1>
        <p>Profile</p>
        <p>Email</p>
        <p>Phone No</p>
        <p>Address</p>
        <p>Orders</p>
      </div>
      <div className="orders">
        <h1>My Orders</h1>
      </div>
    </div>
  );
};

export default MyOrders;
