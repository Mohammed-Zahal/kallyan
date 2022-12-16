import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import {
  AddToCartMutation,
  ADD_PRODUCTS_TO_CART,
} from "../../apollo/Queries/mutation";
import { updateCart } from "../../redux/slice/cart";
import ADD_SHIPPING_TO_CART, {
  AddShippingToCartMutation,
} from "../Checkout/apollo/mutation/shippingMutation";

const useCart = () => {
  const dispatch = useDispatch();
  const addProductsToCart = useMutation<
    AddToCartMutation["Response"],
    AddToCartMutation["Variables"]
  >(ADD_PRODUCTS_TO_CART, {
    onCompleted: (data) => {
      console.log("cart-Data:", data.addProductsToCart);
      dispatch(updateCart(data.addProductsToCart));
    },
    onError: (error) => {
      console.log("AddProductError :", error);
    },
  });
  const addShippingAddressToCart = useMutation<
    AddShippingToCartMutation["Response"],
    AddShippingToCartMutation["Variables"]
  >(ADD_SHIPPING_TO_CART, {
    onCompleted: (data) => {
      console.log("You saved the address  ");

      dispatch(updateCart(data.setShippingAddressesOnCart.cart));
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { addProductsToCart, addShippingAddressToCart };
};

export default useCart;
