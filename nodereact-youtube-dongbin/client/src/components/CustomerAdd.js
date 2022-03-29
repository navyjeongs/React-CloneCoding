import React, { useState } from "react";
import { post } from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

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

  // materialUI
  const [open, setOpen] = useState(false);
  const openFunc = () => {
    setOpen(true);
  };
  const closeFunc = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={openFunc}>
        Add Client
      </Button>
      <Dialog open={open} onClose={closeFunc}>
        <DialogTitle>Client Info</DialogTitle>
        <DialogContent>
          <DialogContentText>Add customer, please input</DialogContentText>

          <form onSubmit={onSubmitFunc}>
            프로필 사진 : &nbsp;
            <input type="file" onChange={fileChangeFunc} />
            <TextField
              label="이름"
              type="text"
              onChange={onChangeFunc}
              id="userName"
            />
            <br />
            <TextField
              label="생년월일"
              type="number"
              onChange={onChangeFunc}
              id="birthday"
            />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">성별</InputLabel>
              <Select
                label="성별"
                onChange={onChangeFunc}
                id="gender"
                labelId="demo-simple-select-label"
              >
                <MenuItem value={"남자"}>남자</MenuItem>
                <MenuItem value={"여자"}>여자</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              label="직업"
              type="text"
              onChange={onChangeFunc}
              id="job"
            />
            <br />
            <DialogActions>
              <Button onClick={closeFunc}>닫기</Button>
              <Button type="submit">등록 완료</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomerAdd;
