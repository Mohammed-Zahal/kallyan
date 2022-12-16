import { BillingCartAddress } from "../../../types/generated/graphql";
import { AddressCard } from "./type";

function billingAddressToAddressCard(address: BillingCartAddress): AddressCard {
  return {
    city: address.city,
    country: address.country.label,
    firstname: address.firstname,
    lastname: address.lastname,
    postcode: address.postcode!,
    street: address?.street?.map(street => street!) || [],
    telephone: address.telephone || undefined,
    region: address.region?.label || undefined,
  }
}

export default billingAddressToAddressCard