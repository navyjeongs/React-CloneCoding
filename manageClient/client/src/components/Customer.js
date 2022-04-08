import React, { useEffect, useState } from "react";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import CustomerDelete from "./CustomerDelete";

const Customer = ({ customers }) => {
  return (
    <>
      <TableRow>
        <TableCell>{customers.id}</TableCell>
        <TableCell>
          <img src={customers.image} alt={customers.id} />
        </TableCell>
        <TableCell>{customers.name}</TableCell>
        <TableCell>{customers.birthday}</TableCell>
        <TableCell>{customers.gender}</TableCell>
        <TableCell>{customers.job}</TableCell>
        <TableCell>
          <CustomerDelete id={customers} />
        </TableCell>
      </TableRow>
    </>
  );
};

// <CustomerProfile customers={customers} />
// <CustomerInfo customers={customers} />

export default Customer;
