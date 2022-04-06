import { useEffect, useState } from "react";

export default function CoinList() {
  // 1. 로딩을 기다리는 state를 만든다.
  const [loading, setLoading] = useState(true);

  // 5. coins를 만들어 json에서 가져와 저장한다.
  const [coins, setCoins] = useState([]);

  const [date, setDate] = useState([]);

  // 3. 한번만 호출되는 useEffect를 만들고 fetch까지만 작성하여 콘솔의 Network에서 잘 가져오는지 확인한다.
  // 4. response를 사용하여 json 형태로 가져온다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((coin) => {
        setCoins(coin);
        setLoading(false);
      });
  }, []);

  // 7. li안의 코인을 카운트하는 함수를 작성한다.
  var coinNum = 0;
  const coinNumfunc = () => {
    coinNum += 1;
    return coinNum;
  };

  useEffect(() => {
    const a = new Date();
    setDate(a.toLocaleString());
  }, []);

  // route 이동 전 컴포넌트에서 state바꾸려는 시도가 있을 때 사용한다.
  useEffect(() => {
    return () => setLoading(false);
  }, []);

  // 2. h2 태그와 loading 상태를 나타내는 태그를 작성한다.
  // 6. h2 태그 옆의 코인의 수와 dl과 li를 작성한다.
  return (
    <div>
      <h2> Coinpaprika ({date} 기준)</h2>
      {loading ? <strong>Loading...</strong> : null}
      <dl>
        {coins.map((coin) => (
          <li key={coin.rank}>
            {coinNumfunc()} : {coin.name}({coin.symbol}), $
            {Math.round(coin.quotes.USD.price * 100000) / 100000} USD,{" "}
            {coin.quotes.USD.price * 1196} Won
          </li>
        ))}
      </dl>
    </div>
  );
}
