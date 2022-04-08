import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Home.css";
const Home = () => {
  return (
    <div className="main">
      <h2>여기는 메인 페이지 입니다.</h2>
      <div>
        <Button variant="outlined">
          <Link to="/UpbitList">업비트에서 구하기</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/UpbitList">업비트 코인목록</Link>
        </Button>
      </div>
      <div>
        <Button variant="outlined">
          <Link to="/AvgPriceCoin">코인파프리카에서 구하기</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/CoinList">코인파프리카 코인목록</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
