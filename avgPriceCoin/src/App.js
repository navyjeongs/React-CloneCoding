import Input from "./getCoin/input";
import Header from "./header/Header";
import CoinList from "./coinList/CoinList";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UpbitList from "./UpbitList";
import AvgPriceCoin from "./avgPriceCoin/AvgPriceCoin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<AvgPriceCoin />} />
          <Route path="/CoinList" element={<CoinList />} />
          <Route path="/GetCoin" element={<Input />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
