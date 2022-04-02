import { useEffect, useState } from "react";

export default function UpbitList() {
  // Upbit의 CoinList 저장
  const [coinList, setCoinList] = useState([]);

  const options = { method: "GET", headers: { Accept: "application/json" } };
  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setCoinList(upbitCoin);
      })
      .catch((err) => console.error(err));
  }, []);

  // coinList에서 KRW로 시작하는 코인의 market과 korean_name을 krwCoin에 저장

  const krwCoin = [];
  const getKrwCoinfunc = () => {
    coinList.map((coin) => {
      if (coin.market.startsWith("KRW")) {
        krwCoin.push({
          korean_name: coin.korean_name,
          market: coin.market,
        });
      }
    });
  };

  const [high, setHigh] = useState([]);

  const getHighPricefunc = (coin) => {
    fetch(`https://api.upbit.com/v1/ticker?markets=KRW-ETH`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0]);
      });
    return high;
  };

  getKrwCoinfunc();
  console.log(krwCoin);
  return (
    <>
      <dl>
        {krwCoin.slice(1, 3).map((coin) => (
          <li key={coin.market}>
            {coin.korean_name}의 최고가 : {getHighPricefunc(coin.market)}
          </li>
        ))}
      </dl>
    </>
  );
}
