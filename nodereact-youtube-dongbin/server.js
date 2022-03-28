const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// express 4.16 이상에서는 필요없다.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs"); // File System Module을 가져온다.
const data = fs.readFileSync("./database.json"); // 동기 처리를 통해 파일을 읽은 후 실행한다.
const conf = JSON.parse(data); // json 문자열을 javascripte 객체로 생성
const mysql = require("mysql");

const connection = mysql.createConnection({
  //mysql 연결을 위한 코드
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

// 고객 정보 받아오는 API
// client로 부터 /api/customers 주소로 요청이 오면 customer의 모든 data를 보내준다.
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

// 13장 사진 업로드
const multer = require("multer");
// ./upload에 사진저장
const upload = multer({ dest: "./upload" });
// client가 /image로 접근하면 ./upload와 매핑되게 할 수 있다.
app.use("/image", express.static("./upload"));
app.post("/api/customers", upload.single("image"), (req, res) => {
  // ?에 data가 바인딩되어 들어간다.
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)";
  let image = "http://localhost:5000/image/" + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];

  connection.query(sql, params, (err, rows, fields) => {
    // 성공적으로 data가 입력되었으면 client에게 메세지 출력
    res.send(rows);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
