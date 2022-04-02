import React from "react";
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
          <CustomerDelete id={customers.id}></CustomerDelete>
        </TableCell>
      </TableRow>
    </>
  );
};

// <CustomerProfile customers={customers} />
// <CustomerInfo customers={customers} />
const CustomerProfile = ({ customers }) => {
  return (
    <div>
      <img src={customers.image} alt={customers.id}></img>
      <h2>{customers.name}</h2>
    </div>
  );
};

const CustomerInfo = ({ customers }) => {
  return (
    <div>
      <p>{customers.birthday}</p>
      <p>{customers.gender}</p>
      <p>{customers.job}</p>
    </div>
  );
};

export default Customer;
