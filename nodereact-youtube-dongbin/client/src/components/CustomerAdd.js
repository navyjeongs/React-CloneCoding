import React, { useState } from "react";
import { post } from "axios";

const CustomerAdd = () => {
  const [info, setInfo] = useState({
    file: null,
    userName: "",
    birthday: "",
    gender: "남자",
    job: "",
    fileName: "",
  });

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", info.file);
    formData.append("name", info.userName);
    formData.append("birthday", info.birthday);
    formData.append("gender", info.gender);
    formData.append("job", info.job);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  const onSubmitFunc = (e) => {
    addCustomer()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // 보내고 info 비우기 : e.preventDefault를 사용하지 않으면 아래 코드는 필요 없음
    setInfo({
      file: null,
      useName: "",
      birthday: "",
      gender: "",
      job: "",
      fileName: "",
    });
    alert("등록이 완료되었습니다.");
  };

  const onChangeFunc = (e) => {
    const target = e.target.id;
    setInfo((prev) => {
      // [target] : 계산된 프로퍼티로 프로퍼티 이름을 변수 target에서 가져오겠다는 의미이다.
      return { ...prev, [target]: e.target.value };
    });
  };

  const fileChangeFunc = (e) => {
    const { value } = e.target;
    setInfo({
      ...info,
      file: e.target.files[0],
      fileName: value,
    });
  };

  console.log(info);
  return (
    <>
      <form onSubmit={onSubmitFunc}>
        프로필 사진 : &nbsp;
        <input type="file" onChange={fileChangeFunc} />
        <br />
        이름 : &nbsp;
        <input type="text" onChange={onChangeFunc} id="userName" />
        <br />
        생일 : &nbsp;
        <input type="number" onChange={onChangeFunc} id="birthday" />
        <br />
        성별 : &nbsp;
        <select onChange={onChangeFunc} id="gender">
          <option>남자</option>
          <option>여자</option>
        </select>
        <br />
        직업 : &nbsp;
        <input type="text" onChange={onChangeFunc} id="job" />
        <br />
        <button type="submit">완료</button>
      </form>
    </>
  );
};

export default CustomerAdd;
