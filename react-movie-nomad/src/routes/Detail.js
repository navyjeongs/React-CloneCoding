// useParams : url에 바뀌는 값을 반환해준다.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(){

    // useParams는 movieid의 변수의 값을 넘겨준다.
    const {movieid} = useParams();

    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieid}`)
        ).json();
        console.log(json.data.movie);
        setMovieDetail(json.data.movie);
        setGe(json.data.movie.genres);
        setLoad(false);
    };

    // 영화 상세 내용을 저장
    const [movieDetail, setMovieDetail] = useState([]);
    // 장르를 저장
    const [ge, setGe] = useState([]);
    // 내용을 불러올 때 loading을 표시
    const [load, setLoad] = useState(true);
  


    useEffect( () => {
        getMovie();
    }, []);



    
    return (
        <>
        {load ? <h1>Loading...</h1> : 
            <>
            <h1>{movieDetail.title}</h1>
            <img src ={movieDetail.medium_cover_image} alt={movieDetail.title}></img>
            <div>
            <h2>Rating : {movieDetail.rating} / 10</h2>
            <dl> <h2>Genres</h2>  
            {ge.map( (g) => (
                <li key ={g}>{g}</li>
            
            ))}
            </dl>
            </div>
            </>
        } 
        </>
    );
}