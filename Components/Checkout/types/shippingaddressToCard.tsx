import { ShippingCartAddress } from '../../../types/generated/graphql'
import { AddressCard } from './type'

function shippingAddressToAddressCard(address: ShippingCartAddress): AddressCard {
  return {
    city: address.city,
    country: address.country.label,
    firstname: address.firstname,
    lastname: address.lastname,
    postcode: address.postcode!,
    region: address.region?.label || undefined,
    street: address?.street?.map(street => street!) || [],
    telephone: address.telephone || undefined,
    customer_notes: address.customer_notes || undefined,
  }
}

export default shippingAddressToAddressCard