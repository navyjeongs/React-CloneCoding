import { useState } from "react";
import { useEffect } from "react"; 

export function Hello() {
  useEffect(() => {
    console.log("Created! :)");

    // 컴포넌트가 Destory 될 때 실행됨
    return () => console.log("destroyed! :(");
  }, []);
  return <h1>Hello!</h1>
}

// state를 변경하면 모든 code는 다시 실행된다.
export default function App() {
  
  const [show, setShow] = useState(false);
  const setShowfunc = (e) => {
    setShow(prev => !prev);
  }

  // button을 눌러 show가 참일때마다 Hello 컴포넌트를 생성하므로 Hello가 계속 출력됨
  return (
    <div>
      <button onClick={setShowfunc}>{show ? "HIDE" : "SHOW"}</button>
      {show ? <Hello /> : null}
    </div>
  );
}

