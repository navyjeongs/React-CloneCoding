import { useState } from "react";

export default function Word({word : w}){
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    
    const isShowfunc = () => {
        setIsShow(isShow ? false : true);
    }

    const [isDone, setIsDone] = useState(word.isDone);

    function isDonefunc() {
        // setIsDone(isDone ? false : true);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm("삭제할까요?")) {
            fetch(`http://localhost:3001/words/${word.id}` ,{
                method : "DELETE",
            }).then(res => {
                if(res.ok){
                    setWord({id : 0});
                }
            })
        }
    }

    if(word.id ===0){
        return null;
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
                <button className = "btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
    );
}