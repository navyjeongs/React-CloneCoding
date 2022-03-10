import { useState } from "react";

export default function Word({word}){
    
    const [isShow, setIsShow] = useState(false);
    
    const isShowfunc = () => {
        setIsShow(isShow ? false : true);
    }

    const [isDone, setIsDone] = useState(word.isDone);

    const isDonefunc = () => {
        setIsDone(isDone ? false : true);
    }

    return(
        <tr className ={isDone ? "off" : ""}>
            <td>
                <input type="checkbox"
                checked = {isDone}
                onChange = {isDonefunc}
                >
                </input>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button
                onClick={isShowfunc}
                >뜻 {isShow ? "숨기기" : "보기"}
                </button>
                <button className = "btn_del">삭제</button>
            </td>
        </tr>
    );
}