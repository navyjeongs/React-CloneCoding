import { useEffect, useState } from "react";
import axios from "axios";
import "../css/UpbitList.css";
import { Link } from "react-router-dom";
import AvgPriceCoin from "./AvgPriceCoin";
// 배열에 비동기 작업을 실시할 때 알아두면 좋을법한 이야기들
const UpbitList = () => {
  // 전체 coinList중 krw만 저장
  const [krwCoin, setKrwCoin] = useState([
    {
      korean_name: "선택",
      english_name: "select",
      market: "select",
    },
  ]);
  const [detailCoin, setDetailCoin] = useState([{}]);
  const options = { method: "GET", headers: { Accept: "application/json" } };
  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setKrwCoin([
          ...krwCoin,
          ...upbitCoin.filter((coin) => coin.market.startsWith("KRW")),
        ]);
      })
      .catch((err) => console.error(err));
  }, []);

  const onChangefunc = async (e) => {
    const { value } = e.target;
    const res = await axios.get(
      `https://api.upbit.com/v1/ticker?markets=${value}`
    );
    if (res.status === 200) {
      console.log(res.data);
      setDetailCoin(res.data);
    }
  };

  const getCoinName = (marketCode) => {
    for (let i = 0; i < krwCoin.length; i++) {
      if (marketCode === krwCoin[i].market) {
        console.log(krwCoin[i]);
        return (
          <div>
            {krwCoin[i].korean_name + "(" + krwCoin[i].english_name + ")"}
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className="detail">
        <h2>평단가를 구하고 싶은 코인을 선택하세요.</h2>
        <select onChange={onChangefunc}>
          {krwCoin.map((coin) => {
            return (
              <option
                name={coin.korean_name}
                value={coin.market}
                key={coin.market}
              >
                {coin.korean_name}
              </option>
            );
          })}
        </select>
        {console.log(detailCoin[0])}
        {detailCoin[0] === "" ? (
          <>
            <br />
            "Select Coin!"
          </>
        ) : (
          <div>
            {getCoinName(detailCoin[0].market)}
            시가 : {detailCoin[0].opening_price}
            <br />
            고가 : {detailCoin[0].high_price}
            <br />
            저가 : {detailCoin[0].low_price}
            <br />
            종가 : {detailCoin[0].trade_price}
            <br />
            52주 신고가 : {detailCoin[0].highest_52_week_price}, 달성일{" "}
            {detailCoin[0].highest_52_week_date}
            <br />
            52주 신저가 : {detailCoin[0].lowest_52_week_price}, 달성일{" "}
            {detailCoin[0].lowest_52_week_date}
          </div>
        )}
      </div>
      <AvgPriceCoin />
    </>
  );
};

export default UpbitList;
