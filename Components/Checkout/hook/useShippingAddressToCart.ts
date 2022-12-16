/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import useCart from "../../hooks/useCart";
import { AddressForm } from "../types/type"; 

const useShippingAddressToCart = () => {
  const cart = useSelector<RootState, RootState["cart"]>((state) => state.cart);
  const {
    addShippingAddressToCart: [
      addShippingAddressToCart,
      addShippingAddressToCartStatus,
    ],
  } = useCart();

  const shipingAddress = useMemo(
    () => cart.data.cart?.shipping_addresses?.[0],
    [cart.data.cart?.shipping_addresses]
  );
  const submitShippingAddress = useCallback(
    async (vals?: AddressForm, _addressId?: number) => {
      await addShippingAddressToCart({
        variables: {
          input: {
            cart_id: cart.data.cartId || "",
            shipping_addresses: [
              {
                address: _addressId
                  ? undefined
                  : {
                      firstname: vals?.firstname!,
                      lastname: vals?.lastname!,
                      company: vals?.company!,
                      city: vals?.city!,
                      country_code: vals?.country_code!,
                      street: [vals?.street!],
                      telephone: vals?.telephone!,
                      postcode: vals?.postcode!,
                      region: vals?.region!,
                    },
                customer_address_id: _addressId,
                customer_notes: vals?.customer_notes,
              },
            ],
          },
        },
      });
    },
    [addShippingAddressToCart, cart.data.cartId]
  );
  return {
    addShippingAddressToCartStatus,
    submitShippingAddress,
    shipingAddress,
  };
};

export default useShippingAddressToCart;
