import { useEffect, useState } from "react";

export default function useFetch(url){


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url) // words 전체를 가져온다.
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}