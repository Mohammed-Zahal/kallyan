import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import CartItem from "./CartItem";

const Cartpage = () => {
  const cart = useSelector<RootState, RootState["cart"]>((state) => state.cart);

  return (
    <>
      <Grid container sx={{ justifyContent: "center", marginTop: 10 }}>
        {cart.data.cart?.items?.map((data) => (
          <CartItem key={data?.uid} cartItem={data!} />
        ))}
      </Grid>
      <Button
        className="btn btn-outline-dark"
        id="checkoutbutton"
        href={"./checkout"}
      >
        checkout processed
      </Button>
    </>
  );
};

export default Cartpage;
