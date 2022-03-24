// MongoDB App Code 숨기는 파일

// Development Mode이면 아래 mongoURI로 가져올 수 있지만
// Production(실 배포)때는 아래 mongoURI로 가져올 수 없고 헤로쿠를 이용해야한다.

// production이면 prod에서 가져온다.
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
  // development면 dev에서 가져온다.
} else {
  module.exports = require("./dev");
}
