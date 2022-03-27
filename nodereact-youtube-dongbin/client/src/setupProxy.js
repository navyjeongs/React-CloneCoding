// 프록시 설정
// /api/customers로 요청하면 5000번 포트로 간다.
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/customers", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
