import { useState } from "react";
import "../css/input.css";
import ChangeMoneyToCoin from "./ChangeMoneyToCoin";

export default function Input() {
  const [money, getMoney] = useState(0);

  const getMoneyfunc = (e) => {
    e.preventDefault();
    console.log(e);
    getMoney(e.target[0].value);
  };

  const resetMoneyfunc = (e) => {
    getMoney(0);
  };
  return (
    <>
      <form className="coinInput" onSubmit={getMoneyfunc}>
        <input
          className="moneyInput"
          type="number"
          placeholder="Write the money you have ($ USD)"
        ></input>
        <input type="submit" value="Click"></input>
      </form>
      <div className="coinInput">
        {money !== 0 ? <h2>You have ${money} USD </h2> : null}
        <ChangeMoneyToCoin money={money} />
        <button value="rester" onClick={resetMoneyfunc}>
          Reset!
        </button>
      </div>
    </>
  );
}
