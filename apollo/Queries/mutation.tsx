import { gql } from "@apollo/client";
import {
  AddProductsToCartOutput,
  CartItemInput,
  SetBillingAddressOnCartInput,
  SetBillingAddressOnCartOutput,
} from "../../types/generated/graphql";
import { CART_FRAGMENT } from "./fragment";
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($customerInput: CustomerInput!) {
    createCustomer(input: $customerInput) {
      customer {
        firstname
        lastname
        email
      }
    }
  }
`;

export const ADD_PRODUCTS_TO_CART = gql`
  ${CART_FRAGMENT}
  mutation addProductToCart($cartId: String!, $items: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $items) {
      cart {
        ...CartFragment
      }
      user_errors {
        message
        code
      }
    }
  }
`;

export const UPDATE_CART_ITEMS = gql`
  mutation updateCartItem($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) {
      cart {
        email
        id
        items {
          quantity
        }
        total_quantity
      }
    }
  }
`;

export const REMOVE_PRODUCT_FROM_CART = gql`
  ${CART_FRAGMENT}
  mutation removeFromCart($removeItemInput: RemoveItemFromCartInput) {
    removeItemFromCart(input: $removeItemInput) {
      cart {
        ...CartFragment
      }
    }
  }
`;

export const EMPTY_CART = gql`
  mutation emptyCart {
    createEmptyCart
  }
`;

export const SET_SHIPPING_ADDRESS = gql`
  ${CART_FRAGMENT}
  mutation setShippingAddress(
    $setShippingAddressOnCartInput: SetShippingAddressesOnCartInput!
  ) {
    setShippingAddressesOnCart(input: $setShippingAddressOnCartInput) {
      cart {
        ...CartFragment
      }
    }
  }
`;

export const SET_BILLING_ADDRESS = gql`
  ${CART_FRAGMENT}
  mutation setShippingAddrss(
    $setBillingAddressOnCartInput: SetBillingAddressOnCartInput
  ) {
    setBillingAddressOnCart(input: $setBillingAddressOnCartInput) {
      cart {
        ...CartFragment
      }
    }
  }
`;


export const SET_PAYMENT_METHOD = gql`
  ${CART_FRAGMENT}
  mutation setPaymentMethod($paymentMethodInput: SetPaymentMethodOnCartInput) {
    setPaymentMethodOnCart(input: $paymentMethodInput) {
      cart {
        ...CartFragment
      }
    }
  }
`;





export const PLACE_ORDER = gql`
  mutation placeOrder($placeOrderInput: PlaceOrderInput) {
    placeOrder(input: $placeOrderInput) {
      order {
        items
        order_number
        total
      }
    }
  }
`;

export type AddToCartMutation = {
  Response: {
    addProductsToCart: AddProductsToCartOutput;
  };
  Variables: {
    cartId: string;
    items: CartItemInput[];
  };
};

