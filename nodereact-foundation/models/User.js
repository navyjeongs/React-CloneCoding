const mongoose = require("mongoose");

// 스키마 작성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  // trim : 공백 없애주는 역할 ex) 이메일에서 re act@naver.com이라치면 react@naver.com으로 저장
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// Schema를 Model로 감싼다.
const User = mongoose.model("User", userSchema);

// 다른 file에서 Model 사용가능하게
module.exports = { User };
