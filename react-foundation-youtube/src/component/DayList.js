import dummy from "../db/data.json"

export default function DayList(){

    console.log(dummy);


    // map() : 배열의 요소를 돌면서 인자로 전달된 함수를 사용하여
    // 처리된 새로운 결과를 새로운 배열에 담아 반환하는 함수

    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key ={day.id}> Day {day.day}</li>
                ))}
        </ul>
    );
}



// 위의 화살표 함수는 아래 방식과 같다.

// const makeday = (day) => {
//     return <li key = {day.id}> Day {day.day}</li>
// }

// return (
//     <ul className="list_day">
//         {dummy.days.map(makeday)}
//     </ul>
// );
