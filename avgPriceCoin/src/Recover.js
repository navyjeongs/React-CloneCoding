import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "./Recover.css";
import Box from "@mui/material/Box";

const Recover = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [coinPiece, setCoinPiece] = useState(0.0);
  const [coinAvg, setCoinAvg] = useState(0.0);
  const [buyCoinPiece, setBuyCoinPiece] = useState(0.0);
  const [buyCoinAvg, setBuyCoinAvg] = useState(0.0);
  const [finalAvg, setFinalAvg] = useState(0.0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((coin) => {
        setCoins(coin);
        setLoading(false);
        console.log(coin);
      });
  }, []);

  const onChangeCountFunc = (e) => {
    setCoinPiece(e.target.value);
  };

  const onChangeAvgFunc = (e) => {
    setCoinAvg(e.target.value);
  };

  const marketPriceFunc = (name) => {
    for (let i = 0; i < coins.length; i++) {
      if (name === coins[i].name) {
        return coins[i].quotes.USD.price;
      }
    }
  };

  const buyCoinAvgFunc = (e) => {
    setBuyCoinAvg(e.target.value);
  };
  const buyCoinPieceFunc = (e) => {
    setBuyCoinPiece(e.target.value);
  };

  const finalAvgFunc = () => {
    let final = coinAvg * coinPiece + buyCoinAvg * buyCoinPiece;
    final = final / (Number(coinPiece) + Number(buyCoinPiece));
    setFinalAvg(final);
  };

  return (
    <div className="text1">
      <h2>구매를 원하는 코인을 선택해주세요.(CoinPaprika 기준)</h2>
      {loading ? (
        "Loading..."
      ) : (
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            style={{ textAlign: "center" }}
            value={value}
            onChange={(e, newValue) => {
              setValue(newValue);
              console.log(newValue);
            }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={coins.map((coin) => coin.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
      )}
      <div>선택한 코인 :{value === "" ? "" : value}</div>
      <br></br>
      <label>현재 보유 수량 :</label>
      <input
        type="number"
        step="0.01"
        onChange={onChangeCountFunc}
        placeholder="소수점 둘째자리까지"
      ></input>
      <label>평균 매수가</label>
      <input type="number" step="0.01" onChange={onChangeAvgFunc}></input>
      <br />
      {coinPiece > 0 && coinAvg > 0 ? (
        <>
          {value}의 보유수량 {coinPiece} 평균 매수가 {coinAvg}$ 입니다. 총 금액
          : {coinPiece * coinAvg} $
          <br />
          <br />
          <label>물타기 희망 갯수</label>
          <input
            type="number"
            step="0.01"
            placeholder="소수점 둘째자리까지"
            onChange={buyCoinPieceFunc}
          ></input>
          <label>희망 구입 가격(개당)</label>
          <input
            type="number"
            step="0.01"
            placeholder={"현시세 :" + marketPriceFunc(value).toFixed(2)}
            onChange={buyCoinAvgFunc}
          ></input>
          <button onClick={finalAvgFunc}>최종 계산!</button>
        </>
      ) : (
        ""
      )}
      <br />
      <br />
      {finalAvg > 0 ? (
        <div>
          {value}의 최종 평단가 : {finalAvg}
        </div>
      ) : (
        ""
      )}
      <br />
      <br />
    </div>
  );
};

export default Recover;
