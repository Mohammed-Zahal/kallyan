import { AddressField } from "../types/type";

const shippingFields: AddressField[] = [
    
    {
        name: "firstname" as "firstname",
        id: "firstname",
        type: "text",
        required: true,
        label: "First Name",
    },
    {
        name: "lastname" as "lastname",
        id: "lastname",
        type: "text",
        required: true,
        label: "Last Name",
    },
    {
        name: "housename" as "housename",
        id: "housename",
        type: "text",
        required: true,
        label: "House Name",
    },
    {
        name: "locations" as "locations",
        id: "locations",
        type: "text",
        required: true,
        label: "Locations",
    },
    {
        name: "street" as "company",
        id: "street",
        type: "text",
        required: true,
        label: "Address",
    },
    {
        name: "city" as "city",
        id: "city",
        type: "text",
        required: true,
        label: "City / Town",
    },
    {
        name: "region" as "region",
        id: "region",
        type: "select",
        required: true,
        label: "State/Province",
        options: [],
    },
    {
        name: "postcode" as "postcode",
        id: "postcode",
        type: "text",
        required: true,
        label: "Postcode / ZIP",
    },
    {
        name: "country" as "country",
        id: "country",
        type: "select",
        required: true,
        label: "Country",
    },
    {
        name: "telephone" as "telephone",
        id: "telephone",
        type: "text",
        required: true,
        label: "Phone",
    },
    {
        name: "customer_notes" as "customer_notes",
        id: "customer_notes",
        type: "text-area",
        required: false,
        label: "Order Note",
    },
];

export default shippingFields;