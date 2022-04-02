import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div>
      <h1 className="title">
        <Link to="/">How Many Coins Can I get?</Link>

        {/* <button>
          <Link to="/UpbitList" className="CoinList">
            업비트
          </Link>
        </button> */}
        <Button variant="outlined">
          <Link to="/Recover">평단가 계산기</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/CoinList" className="CoinList">
            코인 리스트
          </Link>
        </Button>
      </h1>
      <hr />
    </div>
  );
}
