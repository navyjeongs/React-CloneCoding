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
    console.log(props.id);
    deleteCustomer(props.id);
  };

  return (
    <>
      <button onClick={deleteFunc}>삭제</button>
    </>
  );
};

export default CustomerDelete;
