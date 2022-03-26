// npm install @material-ui/core : material-ui 패키지

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import "./App.css";
import Customer from "./components/Customer";

const styles1 = (theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
const customers = [
  {
    id: 1,
    name: "navy",
    birthday: "000101",
    gender: "남자",
    job: "대학생",
    image: "https://placeimg.com/100/100/1",
  },
  {
    id: 2,
    name: "army",
    birthday: "010101",
    gender: "남자",
    job: "대학원",
    image: "https://placeimg.com/100/100/12",
  },
  {
    id: 3,
    name: "air",
    birthday: "020202",
    gender: "여자",
    job: "고등학생",
    image: "https://placeimg.com/100/100/3",
  },
];

function App() {
  return (
    <>
      <Paper className={styles1.root}>
        <Table className={styles1.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map((props) => {
              return <Customer customers={props} key={props.id} />;
            })}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default App;
