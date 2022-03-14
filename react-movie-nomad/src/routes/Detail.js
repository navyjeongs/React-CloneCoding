// useParams : url에 바뀌는 값을 반환해준다.
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(){

    // useParams는 movieid의 변수의 값을 넘겨준다.
    const {movieid} = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieid}`)
        ).json();
        console.log(json);
    };

    useEffect( () => {
        getMovie();
    }, []);

    
    return (
        <h1>Detail</h1>
    );
}