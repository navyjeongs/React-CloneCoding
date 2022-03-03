// index.js : 백엔드 서버 시작점
// 터미널에 npm install express --save : express 라이브러리 설치

// package.json의 스크립트 안에 "start" : "node index.js"을 추가한다. : start를 하면 node 앱을 실행한다는 의미

// 터미널에 npm install mongoose --save : 몽고 DB를 편하게 사용할 수 있는 Tool, package.json "dependencies"에 mongoose 추가됐는지 확인



const express = require('express')  // express 모듈 가져옴
const app = express()   // 새로운 express App을 만든다.
const port = 5000   // back Server

const config = require("./config/key");



const mongoose = require('mongoose')
mongoose.connect(config.MongoURI)





app.get('/', (req, res) => {
  res.send('Hello World! ~~ ')
})

app.listen(port, () => {
  console.log(`Example app !@listening on port ${port}`)
})