// 배포모드일때는 헤로쿠에서 가져온다.

module.exports = {
  mongoURI: process.env.MONGO_URI,
};
