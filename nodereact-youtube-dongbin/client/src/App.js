// npm install @material-ui/core : material-ui 패키지

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Customer from "./components/Customer";
import { makeStyles } from "@material-ui/core/styles";
import CustomerAdd from "./components/CustomerAdd";
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: 10,
  },
});

function App() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  /* useEffect에서 async를 사용할 땐 안으로 넣어야한다.
  useEffect(async () => {
    await axios
      .get("/api/customers")
      .then((getData) => setCustomers(getData.data));
  }, []);
  */
  // 다음과 같이 useEffect안에 비동기 function을 하나 만들고 실행시키면 된다.
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("./api/customers")
        .then((result) => setCustomers(result.data));
    };
    fetchData();
  }, []);

  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>설정</TableCell>
          </TableHead>
          <TableBody>
            {customers !== 0
              ? customers.map((props) => {
                  return <Customer customers={props} key={props.id} />;
                })
              : " "}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd />
    </>
  );
}

export default App;
