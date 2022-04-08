import "../css/Header.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1 className="title">
        <Link to="/">평단가 계산기</Link>
        <Button variant="outlined">
          <Link to="/Input">몇 개의 코인</Link>
        </Button>
      </h1>
      <hr />
    </div>
  );
};

export default Header;
