import { useEffect, useState } from "react";

export default function useFetch(url){

    // data라는 상태값이 있고 api 주소를 넘겨받아 set하고 return 한다.
    const [data, setData] = useState([]);

    
    useEffect(() => {
        fetch(url) // words 전체를 가져옴
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}