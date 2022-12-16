/* eslint-disable react/require-default-props */
import React, { useCallback, useId, useMemo } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import shippingaddress from "./shippingaddress";
import generateValidationSchema from "../types/generateValidschema";
import getInitialValues from "../types/getinitialValues";
// import useCountriesForFields from "../../hooks/useCountriesForFields";
import billingaddress from "./billingaddress";
import {
  AddressCard as AddressCardType,
  AddressForm as AddressFormType,
} from "../types/type";
import AddressCard from "../addressCard";
import { Stack, Typography, Button } from "@mui/material";
import useCountriesForFields from "../hook/useCountriesField";
import billingFields from "./billingaddress";
import shippingFields from "./shippingaddress";

// type Names = (typeof shippingFields)[number]['name']

interface AddressFormProps {
  type: "shipping" | "billing";
  title: string;
  updating?: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: AddressFormType) => Promise<void>;
  address?: AddressCardType;
}

const AddressForm: React.FC<AddressFormProps> = ({
  type,
  title,
  updating,
  onSubmit,
  address,
}) => {
  const defaultFields = useMemo(
    () => (type === "shipping" ? shippingFields : billingFields),
    [type]
  );
  const [editings, toggleEditings] = useToggle(false);
  const inputId = useId();
  const shippingForm = useFormik({
    initialValues: getInitialValues(defaultFields),
    validationSchema: Yup.object().shape(
      generateValidationSchema(defaultFields)
    ),
    onSubmit: (vals) => onSubmit(vals).then(() => toggleEditings(false)),
  });

  const fields = useCountriesForFields(
    defaultFields,
    shippingForm.values.country
  );

  const onEditClick = useCallback(() => {
    toggleEditings();
    shippingForm.setValues({
      ...(address as any),
      street: address?.street?.join(", ") || "",
    });
  }, [toggleEditings, shippingForm, address]);

  return (
    <Stack
      component="form"
      direction="column"
      className="checkout-form"
      onSubmit={shippingForm.handleSubmit as any}
    >
      <Typography className="checkout-form-title">{title}</Typography>
      {address && !editings ? (
        <AddressCard
          address={address}
          actions={[
            {
              label: "Edit Adress",
              onClick: onEditClick,
            },
          ]}
        />
      ) : (
        <>
          {fields.map((field) => {
            return (
              <InputWithLabel
                key={field.name}
                id={inputId + field.id}
                label={field.label}
                onChange={shippingForm.handleChange}
                name={field.name}
                required={field.required}
                type={field.type}
                options={field.options}
                value={shippingForm.values[field.name]}
              />
            );
          })}
          <Stack direction="row" className="gap-2 justify-end items-center">
            {editings && (
              <Button
                onClick={() => toggleEditings(false)}
                className="address-cancel-btn"
                type="button"
              >
                Cancel
              </Button>
            )}
            <button
              className="address-save-btn"
              type="submit"
              disabled={updating}
            >
              Save Address
            </button>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default AddressForm;
function useToggle(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

