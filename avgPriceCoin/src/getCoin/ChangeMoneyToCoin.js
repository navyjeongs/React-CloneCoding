import { useEffect, useState } from "react";
import HowManyCoin from "./HowManyCoin";
export default function ChangeMoneyToCoin(props) {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((list) => {
        setCoinList(list);
      });
  }, []);

  const [exChangeCoin, setExChangeCoin] = useState("origin");
  const exChangefunc = (e) => {
    setExChangeCoin(e.target.value);
  };

  return (
    <>
      <h2>Which Coin What you want?</h2>
      <select onChange={exChangefunc}>
        <option value="origin">Select</option>
        {coinList.map((coin) => (
          <option value={coin.symbol} key={coin.rank}>
            {coin.name}
          </option>
        ))}
      </select>
      <HowManyCoin symbol={exChangeCoin} money={props.money} />
    </>
  );
}
