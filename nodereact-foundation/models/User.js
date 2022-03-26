const mongoose = require("mongoose");

// https://www.npmjs.com/package/bcrypt : bcrypt 사용법
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
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

// userSchema를 mongoose에 save하기 전에 function을 실행한다.
// function을 실행후 index.js의 user.save로 이동한다.
userSchema.pre("save", function (next) {
  var user = this;
  // password가 변경될 때만 비밀번호 암호화작업을 하게
  if (user.isModified("password")) {
    // password 암호화 작업
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        return next(err);
      }
      // myPlaintextPassword : Client가 입력한 password
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } // password를 제외한 다른 것을 변경할 때 index.js의 user.save로 이동
  else {
    next();
  }
});

// 로그인시
userSchema.methods.comparePassword = function (plainPassword, callback) {
  // plainpassword를 암호화된 비밀번호와 일치하는지 확인
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    // err이 없고 같을 때
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function (callback) {
  var user = this;
  // jsonwebtoken을 이용해 token 생성
  var token = jwt.sign(user._id.toHexString(), "secrettokennn");
  user.token = token;
  user.save(function (err, user) {
    if (err) {
      return callback(err);
    }
    // 에러가 없을 때
    callback(null, user);
  });
};

// Schema를 Model로 감싼다.
const User = mongoose.model("User", userSchema);

// 다른 file에서 Model 사용가능하게
module.exports = { User };
