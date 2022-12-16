import { gql } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { CART_FRAGMENT } from "../../../../apollo/Queries/fragment";
import { Cart } from "../../../../types/generated/graphql";

export const GET_CART = gql`
  ${CART_FRAGMENT}
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...CartFragment
    }
  }
`;


export type CartQuery = {
    Response: {
      cart: Maybe<Cart>;
    };
    Variables: {
      id: string;
    };
  };
  
  export default GET_CART;