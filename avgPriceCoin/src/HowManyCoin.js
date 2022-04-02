import { useEffect, useState } from "react";

export default function HowManyCoin(props) {
  const coin = props.symbol;
  const money = props.money;
  var howcoin = 0;
  const [exCoin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((coinli) => {
        setCoin(coinli);
      });
  }, [exCoin]);

  const howCoinfunc = (c) => {
    if (c.symbol === coin) {
      return (
        <h1>
          {" "}
          {(howcoin = money / c.quotes.USD.price)} {c.symbol}!
        </h1>
      );
    }
  };

  return (
    <div>
      {money !== 0 && coin !== "origin" ? <h2>You Can Get</h2> : null}
      {money !== 0 && coin !== "origin"
        ? exCoin.map((coin) => howCoinfunc(coin))
        : null}
    </div>
  );
}
