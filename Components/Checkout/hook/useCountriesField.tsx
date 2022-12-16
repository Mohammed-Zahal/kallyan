/* eslint-disable no-unsafe-optional-chaining */
import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AddressField } from "../types/type";

function useCountriesForFields(
  defaultFields: AddressField[],
  selectedCountry?: string
) {
  const countries = useAppSelector(
    (state) => state.storeConfig.data?.countries || []
  );
  const hasAuthenticated = useAppSelector((state) => state.auth.token !== null);
  const hasEmail = useAppSelector(
    (state) => !!state.shoppingCart.data.cart?.email
  );

  const fields = useMemo(() => {
    const newFields = [...defaultFields];
    const idxOfCountry = newFields.findIndex(
      (field) => field.name === "country"
    );
    if (idxOfCountry !== -1) {
      newFields[idxOfCountry].options = [
        {
          value: "",
          label: "Select country",
        },
        ...countries.map((country) => ({
          label: country?.full_name_locale!,
          value: country?.id!,
        })),
      ];
    }
    const idOfRegion = newFields.findIndex((field) => field.name === "region");
    if (selectedCountry) {
      if (idOfRegion !== -1) {
        const selectedCountryData = countries?.find(
          (country) => country?.id === selectedCountry
        );
        const availableRegions = selectedCountryData?.available_regions;
        if (!availableRegions || availableRegions.length === 0) {
          newFields[idOfRegion] = {
            ...newFields[idOfRegion],
            options: undefined,
            type: "text",
          };
        } else {
          newFields[idOfRegion].options = [
            {
              value: "",
              label: "Select state",
            },
            ...(selectedCountryData?.available_regions?.map((region) => ({
              label: region?.name!,
              value: region?.code!,
            })) || []),
          ];
        }
      }
    } else if (idOfRegion !== -1) {
      newFields.splice(idOfRegion, 1);
    }
    if (hasAuthenticated || hasEmail) {
      const idOfEmail = newFields.findIndex((field) => field.name === "email");
      if (idOfEmail !== -1) {
        // newFields[idOfEmail].required = false;
        newFields.splice(idOfEmail, 1);
      }
    }
    return newFields;
  }, [countries, defaultFields, hasEmail, hasAuthenticated, selectedCountry]);

  return fields;
}

export default useCountriesForFields;
