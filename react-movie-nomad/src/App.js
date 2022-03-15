import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Headers from "./routes/Header";

// Home route : 모든 영화를 보여줌, movie route : 영화 1개만 보여줌

// App.js는 Route를 render를 한다.
// router는 URL을 보고있는 component이다. URL에 따라 Home 또는 Detail을 보여준다.


// Switch -> Routes로 바뀜 
// Routes : Route(URL)를 찾는 역할, 찾으면 컴포넌트를 렌더링함
// Route에서 /movie를 작성했다면 Link를 통해 이동이 가능하게 작성해야한다.



// movie/:movieid : movieid변수의 경로로 유저를 보낼수 있다.

function App() {
  return (
  <BrowserRouter>
    <Headers />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieid" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;