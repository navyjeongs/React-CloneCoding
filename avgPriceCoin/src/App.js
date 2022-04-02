import Input from "./input/input";
import Header from "./header/Header";
import CoinList from "./CoinList";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UpbitList from "./UpbitList";
import Recover from "./Recover";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/CoinList" element={<CoinList />} />
          <Route path="/UpbitList" element={<UpbitList />} />
          <Route path="/Recover" element={<Recover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
