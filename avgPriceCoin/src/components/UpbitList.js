import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/UpbitList.css";

// 배열에 비동기 작업을 실시할 때 알아두면 좋을법한 이야기들
const UpbitList = () => {
  // 전체 coinList중 krw만 저장
  const [krwCoin, setKrwCoin] = useState([]);
  // 특정 coin 정보 저장
  const [detailCoin, setDetailCoin] = useState([{}]);
  // 코인을 선택했는지
  const [select, setSelect] = useState(0);
  // 평단가 계산
  const [calAvg, setCalAvg] = useState({
    nowCount: "",
    nowAvg: "",
    hopeCount: "",
    hopeAvg: "",
  });

  const options = { method: "GET", headers: { Accept: "application/json" } };
  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setKrwCoin(upbitCoin.filter((coin) => coin.market.startsWith("KRW")));
      })
      .catch((err) => console.error(err));
  }, []);

  const onChangeCoinFunc = async (e) => {
    setSelect(1);
    const { value } = e.target;
    await axios
      .get(`https://api.upbit.com/v1/ticker?markets=${value}`)
      .then((res) => {
        console.log(res.data);
        setDetailCoin(res.data);
      });
  };

  const getCoinName = (marketCode) => {
    for (let i = 0; i < krwCoin.length; i++) {
      if (marketCode === krwCoin[i].market) {
        console.log(krwCoin[i]);
        return (
          <>{krwCoin[i].korean_name + "(" + krwCoin[i].english_name + ")"}</>
        );
      }
    }
  };

  const onChangeAvgFunc = (e) => {
    const { name, value } = e.target;
    setCalAvg({ ...calAvg, [name]: value });
  };

  return (
    <>
      <div className="detail">
        <h2>평단가를 구하고 싶은 코인을 선택하세요.</h2>
        <select onClick={onChangeCoinFunc}>
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

        {select === 0 ? (
          <>
            <br />
            "Select Coin!"
          </>
        ) : (
          <div>
            [{getCoinName(detailCoin[0].market)} 정보]
            <br />
            현재가 : {detailCoin[0].trade_price}\
            <br />
            시가 : {detailCoin[0].opening_price}\
            <br />
            고가 : {detailCoin[0].high_price}\
            <br />
            저가 : {detailCoin[0].low_price}\
            <br />
            52주 신고가 : {detailCoin[0].highest_52_week_price}\ , 달성일{" "}
            {detailCoin[0].highest_52_week_date}
            <br />
            52주 신저가 : {detailCoin[0].lowest_52_week_price}\ , 달성일{" "}
            {detailCoin[0].lowest_52_week_date}
          </div>
        )}
      </div>
      <div className="purchase">
        {select === 0 ? (
          ""
        ) : (
          <>
            <input
              name="nowCount"
              value={calAvg.nowCount}
              onChange={onChangeAvgFunc}
              placeholder="현재 보유수량"
            ></input>
            <input
              name="nowAvg"
              value={calAvg.nowAvg}
              onChange={onChangeAvgFunc}
              placeholder="현재 평단가"
            ></input>
            {calAvg.nowCount === "" || calAvg.nowAvg === "" ? (
              ""
            ) : (
              <div>
                보유수량 : {calAvg.nowCount}, 현재 평단가 : {calAvg.nowAvg}\, 총
                금액 :{calAvg.nowCount * calAvg.nowAvg}\
                <br />
                <input
                  name="hopeCount"
                  value={calAvg.hopeCount}
                  onChange={onChangeAvgFunc}
                  placeholder="구매 희망 갯수"
                ></input>
                <input
                  name="hopeAvg"
                  value={calAvg.hopeAvg}
                  onChange={onChangeAvgFunc}
                  placeholder={`현시세 : ${detailCoin[0].trade_price}`}
                ></input>
                <br />
                {calAvg.hopeAvg === "" || calAvg.hopeCount === "" ? (
                  ""
                ) : (
                  <div>
                    {" "}
                    최종 평단가 :
                    {(calAvg.nowAvg * calAvg.nowCount +
                      calAvg.hopeAvg * calAvg.hopeCount) /
                      (Number(calAvg.nowCount) + Number(calAvg.hopeCount))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UpbitList;
