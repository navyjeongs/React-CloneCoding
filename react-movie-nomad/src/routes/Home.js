import { useEffect, useState } from "react";
import Movie from "../components/Movie";

// Home Route는 App 컴포넌트 전체를 가지고 있게 된다.
export default function Home(){
    const [loading , setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    /*
    useEffect( () => {
      fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      .then( (response) => response.json())
      .then( (json) => {
        setMovies(json.data.movies);
        setLoading(false);
      })
    }, []);
    */
  
    //위와 같은 표현이다.
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
  
    useEffect( () => {
      getMovies();
    }, []);
  
  
  
    // key : map에서 컴포넌트를 render시 사용
  

  
    return(
      <div>
        {
          loading ? <h1>Loading...</h1> :
          <div>
          {movies.map( (movie) => 
            <Movie
            key={movie.id}
            id={movie.id}
            coverImage={movie.medium_cover_image} title={movie.title}
            summary={movie.summary} genres={movie.genres}
            />
          )}
          </div>
        }
      </div>
    );
}