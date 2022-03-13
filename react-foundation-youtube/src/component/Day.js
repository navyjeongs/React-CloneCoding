import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  
    // a에 day의 값을 가져온다.
    // a에 저장되는 값은 문자이다.(숫자일지라도)
    // 따라서 wordList에서 비교할 때 Number를 붙인다.
    
    const a = useParams();
    const day = a.day;

    // const wordList = dummy.words.filter(word => (word.day === Number(day))) 더미 데이터이므로 지우기

    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`) // words 전체를 가져온다.
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day]);

    return(
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word => (
                  <Word word ={word} key ={word.id}/>
                ))}

            </tbody>
        </table>
    </>
    );
}