/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import { Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

import { AddressCard as AddressCardType } from "../types/type";

interface Action {
  label: string;
  onClick?: () => void;
  className?: string;
}

interface AddressCardProps {
  address: AddressCardType;
  actions?: Action[];
}

const AddressCard: React.FC<AddressCardProps> = ({ address, actions }) => {
  return (
    <Card className="address-card">
      <Typography className="address-card-text">
        {address.firstname} {address.lastname}
      </Typography>
      <Typography className="address-card-text">
        {address.street?.join(", ")}
      </Typography>
      <Typography className="address-card-text">
        {address.city}, {address.region}
      </Typography>
      <Typography className="address-card-text">
        {address.country}, {address.postcode}
      </Typography>
      <Typography className="address-card-text">
        PH: {address.telephone}
      </Typography>
      {!!address.customer_notes && (
        <Typography className="address-card-text address-card-notes">
            <span>Notes:</span>{address.customer_notes}
        </Typography>
      )}
      <Stack direction="row" className="address-card-action-container">
        {actions?.map((action, i) => (
          <Button
            key={i}
            onClick={action.onClick}
            className={`address-card-action ${action.className || ""}`}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </Card>
  );
};

export default AddressCard;
