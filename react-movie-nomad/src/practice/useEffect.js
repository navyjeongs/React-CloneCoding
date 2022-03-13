import Button from "./Button";  // Button.js에서 Button을 가져온다.
import styles from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react"; 


// state를 변경하면 모든 code는 다시 실행된다.
export default function App() {
  
  const [counter, setValue] = useState(0);
  const setValuefunc = () => {
    setValue(prev => prev + 1);
  } 


  const [keyword, setKeyword] = useState("");
  const setKeywordfunc = (event) => {
    setKeyword(event.target.value);
  }


  // 두 번째 인자가 없기 때문에 상태가 변하면 한번만 실행한다.
  useEffect(() => {
    console.log("Run Only Once!");
  }, []);

  // 두 번째 인자로 keyword를 작성하면 keyword가 변화할 때만 실행한다.
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("Search For", keyword);
    }
  }, [keyword]);
  

  // className은 랜덤으로 정해진다.
  return (
   <div>
     <input 
     value = {keyword}
     onChange = {setKeywordfunc}
     type="text"
     placeholder="Search Here...">
     </input>

     <h1 className ={styles.title}>Welcome</h1>

     <button onClick={setValuefunc}>Click : {counter}</button>
   </div>
  );
}

