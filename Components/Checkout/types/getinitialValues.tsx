import { AddressField } from "./type";

const getInitialValues = (fields: AddressField[]): {
    [key: string]: string
} => {
    return fields.reduce((acc, val) => {
        acc[val.name] = ""
        return acc;
    }, {} as {
        [key: string]: string
    })
}

export default getInitialValues;