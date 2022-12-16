import { AddressField } from "../types/type";

const billingFields: AddressField[] = [
    
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
        name: "street" as "street",
        id: "street",
        type: "text",
        required: false,
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
    // {
    //     name: "email" as "email",
    //     id: "email",
    //     type: "text",
    //     required: true,
    //     label: "Email",
    // },
    {
        name: "telephone" as "telephone",
        id: "telephone",
        type: "text",
        required: true,
        label: "Phone",
    },
];

export default billingFields;