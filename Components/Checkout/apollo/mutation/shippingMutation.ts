import { gql } from "@apollo/client";
import { CART_FRAGMENT } from "../../../../apollo/Queries/fragment";
import { SetShippingAddressesOnCartInput, SetShippingAddressesOnCartOutput } from "../../../../types/generated/graphql";



const ADD_SHIPPING_TO_CART = gql`
  ${CART_FRAGMENT}
  mutation AddShippingToCart($input: SetShippingAddressesOnCartInput) {
    setShippingAddressesOnCart(input: $input) {
      cart {
        ...CartFragment
      }
    }
  }
`;

export default ADD_SHIPPING_TO_CART;

export interface AddShippingToCartMutation {
  Response: {
    setShippingAddressesOnCart: SetShippingAddressesOnCartOutput;
  };
  Variables: {
    input: SetShippingAddressesOnCartInput;
  };
}