import { Button } from "@material-ui/core";
import React from "react";
const CustomerDelete = (props) => {
  const deleteCustomer = (id) => {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then(alert(`${id} 고객의 삭제가 완료되었습니다.`))
      .then(window.location.reload());
  };

  const deleteFunc = () => {
    const realDelete = window.confirm("삭제하시겠습니까?");
    console.log(props.id);
    if (realDelete) {
      deleteCustomer(props.id);
    } else {
      window.alert("삭제를 취소하였습니다.");
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={deleteFunc}>
        삭제
      </Button>
    </>
  );
};

export default CustomerDelete;
