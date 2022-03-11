// import dummy from "../db/data.json" : REST API, json-server 설치 시 필요없음
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList(){

    const [days, setDays] = useState([]); // 처음에는 빈 배열로 만들고 API에서 리스트를 가져와 바꾸는 방식
                                          // 데이터가 바뀌면 자동 렌더링

    useEffect(() => {
        fetch("http://localhost:3001/days")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        })
    }, []);


    // const [count, setCount] = useState(0);
    // const setCountfunc = () => {
    //     setCount(count+1);
    // }

    // useEffect(() => { // 이 함수의 호출시점은 렌더링 후 DOM에 반영된 직후
    //                 // 상태값이 변경되고 렌더링 후 호출됨
    //                 // 
    //     console.log("Count changed to " + count);
    // }, []);      // 빈 배열을 넘기면 최초의 1번만 호출된다.
    //              // 두 번째 매개 변수로 [count]를 넘기면 count가 변경될 때만 useEffect가 호출된다.
    //              // 의존성 배열이라 한다.

    
    // // let a = [...b] : b의 배열이 a에 복사된다.
    // const setDaysfunc = () => {
    //     setDays( [
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day : 1
    //         }
    //         ]
            
    //     );
    // }

    // map() : 배열의 요소를 돌면서 인자로 전달된 함수를 사용하여
    // 처리된 새로운 결과를 새로운 배열에 담아 반환하는 함수
    // 리액트는 a href대신 Link to를 사용한다.
    return (
        
        <ul className="list_day">
            {days.map(day => (
                <li key ={day.id}> 
                <Link to={`/day/${day.day}`}> Day {day.day}</Link></li>
                ))}
        </ul>
        // <button onClick={setCountfunc}>{count}</button>
        // <button onClick={setDaysfunc}>Day Change</button> 
        
    );
}




// return (
//     <ul className="list_day">
//         {dummy.days.map(day => (
//             <li key ={day.id}> Day {day.day}</li>
//             ))}
//     </ul>
// );
// }
// 위의 화살표 함수는 아래 방식과 같다.

// const makeday = (day) => {
//     return <li key = {day.id}> Day {day.day}</li>
// }

// return (
//     <ul className="list_day">
//         {dummy.days.map(makeday)}
//     </ul>
// );
