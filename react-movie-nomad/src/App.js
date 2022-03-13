import { useEffect, useState } from "react";

export default function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
    .then(response => response.json())
    .then(coins => {
      setCoins(coins);
      setLoading(false);
    }
    );
  }, []);


  const [coins, setCoins] = useState([]);
 


  // 코인 번호 매기기
  var count = 0; 
  const coinCount = () => {
    count +=1;
    return <>{count} </>
  }

  // map은 element에 key를 줘야하는데 json에서 가져온 것의 id를 사용하면 된다.
  // coin은 coins array에 있는 각각의 coin을 의미한다.
  return (
    <div>
      <h1>List of Coins! ({coins.length})</h1>
      <hr />
      {loading ? <strong>Loading...</strong> : null}
      <dl>
        {
          coins.map((coin) =>
            <li>
              {coinCount()}
              : {coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)
            </li>
          )
        }
      </dl>
    </div>
  );
}