// index.js : 백엔드 서버 시작점

const express = require("express"); // express 모듈 가져옴
const app = express(); // 새로운 express App을 만든다.
const port = 5000; // back Server Port 설정

// User Model을 가져옴
const { User } = require("./models/User");

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

// connect의 AppCode를 config/key에서 가져오기
const config = require("./config/key");

app.use(cookieParser());

// Connect 성공시 then 실행, 실패시 catch 출력
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connect!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello get Request!");
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

// 로그인
app.post("/login", (res, req) => {
  // 1. 요청된 email이 DB에 있는지 확인
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    // email이 없다면
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "Email에 해당하는 User가 존재하지 않습니다.",
      });
    }
  });
  // 2. email이 있다면 password가 맞는지 확인
  userInfo.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch) {
      return res.json({
        loginSuccess: false,
        message: "비밀번호가 일치하지 않습니다.",
      });
    }
  });
  // 3. password가 맞다면 token 생성
  user.generateToken((err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    res
      .cookies("x_auth", user.token)
      .status(200)
      .json({ loginSuccess: true, userId: user._id });
  });
});

app.listen(port, () => {
  console.log(`Example app !@listening on port ${port}`);
});
