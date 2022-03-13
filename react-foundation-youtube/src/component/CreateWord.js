import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import Word from "./Word";

export default function CreateWord(){

    const days = useFetch("http://localhost:3001/days")
    
    
    function onSubmit(e) {

        e.preventDefault();

        console.log(engRef.current.value);

        fetch(`http://localhost:3001/words/` ,{
            method : "POST",
            headers : {
                "Content-Type" : "applicaton/json",
            },
            body: JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false,
            }),
            }).then(res => {
                if(res.ok){
                    alert("생성 완료");
                }
            });
    }

    
    // useRef는 DOM에 접근할 수 있게 해준다. 스크롤하거나 포커스하거나
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type ="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type ="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
               <select ref={dayRef}>
                   {days.map(day => (
                        <option key={day.id} value={day.day}>
                        {day.day}
                        </option>
                   ))}

               </select>
            </div>
            <button>저장</button>
        </form>
    );
}