import { useState } from "react";
import "./Hello.css";
import UserName from "./UserName";


// App.js에서 전달받은 값을 props로 받는다.
// 넘겨받은 props를 Read_Only이므로 변경이 불가능하다. ex) props.age = 100;
export default function Hello(props){

    const [name, setName] = useState("Tom");

    const setNameFunc = () => {
        setName(name === "Tom" ? "Alex" : "Tom");
    }

    
    const [age, setAge] = useState(props.age); // 초기값은 props에서 넘겨받은 age이다.
    const setAgeFunc = () => {
        setAge(age +1);
    }


    const msg = (age > 19) ? "성인입니다." : "미성년자입니다";



    // Hello 컴포넌트 관점에서 UserName의 {name}은 State이지만 UserName 컴포넌트 관점에선 props이다.
    return(
        <div>
            <h2 id ="name">{name} ({age}) : {msg} </h2>
            <UserName name = {name} age = {age}/>
            <button
            onClick={setNameFunc} 
            >
            Change Name
            </button>
            <button
            onClick={setAgeFunc}
            >
            Change Age
            </button>
        </div>
    );
}