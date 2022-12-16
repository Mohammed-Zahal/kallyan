export interface SelectOption {
    value: string;
    label: string;
}

export interface AddressField {
    name: string;
    id: string;
    type: string;
    required: boolean;
    label: string;
    options?: SelectOption[];
};

export interface AddressForm {
    [key: string]: string;
}

export interface AddressCard {
    firstname?: string;
    lastname?: string;
    street?: string[];
    city?: string;
    postcode?: string;
    telephone?: string;
    country?: string;
    region?: string;
    customer_notes?: string;
}