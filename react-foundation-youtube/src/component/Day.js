import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  
    // a에 day의 값을 가져온다.
    // a에 저장되는 값은 문자이다.(숫자일지라도)
    // 따라서 wordList에서 비교할 때 Number를 붙인다.
    
    const a = useParams();
    const day = a.day;

    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))

    return(
    <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    </>
    );
}