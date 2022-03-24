// index.js : 백엔드 서버 시작점

const express = require("express"); // express 모듈 가져옴
const app = express(); // 새로운 express App을 만든다.
const port = 5000; // back Server Port 설정

// User Model을 가져옴
const { User } = require("./models/User");

const mongoose = require("mongoose");

// connect의 AppCode를 config/key에서 가져오기
const config = require("./config/key");
// Connect 성공시 then 실행, 실패시 catch 출력
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connect!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello get Request");
});

//application/x-www-form-urlencoded 으로 된 data를 분석해서 가져옴
app.use(express.urlencoded({ extended: true }));
//application/json 으로 된 data를 분석해서 가져옴
app.use(express.json());

app.post("/register", (req, res) => {
  // 회원가입시 작성한 정보를 client에서 가져오면 그것을 DB에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app !@listening on port ${port}`);
});
