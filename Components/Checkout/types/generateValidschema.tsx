import { ObjectShape } from "yup/lib/object";
import * as Yup from "yup";
import { AddressField } from "./type";

const generateValidationSchema = (fields: AddressField[]) => {
  return fields.reduce((acc, val) => {
    acc[val.name] = Yup.string();
    if (val.required) {
      acc[val.name] = (acc[val.name] as Yup.StringSchema).required();
    }
    return acc;
  }, {} as ObjectShape);
};

export default generateValidationSchema;
