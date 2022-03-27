const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 고객 정보 받아오는 API 만들기
app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
