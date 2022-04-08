import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinList from "../components/CoinList";
import Header from "../components/Header";
import Input from "../components/input";
import UpbitList from "../components/UpbitList";
import Home from "../components/Home";
import AvgPriceCoin from "../components/AvgPriceCoin";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoinList" element={<CoinList />} />
        <Route path="/GetCoin" element={<Input />} />
        <Route path="/UpbitList" element={<UpbitList />} />
        <Route path="/AvgPriceCoin" element={<AvgPriceCoin />} />
        <Route path="/Input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
