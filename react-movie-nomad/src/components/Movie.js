import PropTypes from "prop-types";
import { Link } from "react-router-dom";



// Link는 새로고침 없이 페이지 이동을 해준다.
export default function Movie({id, coverImage, title, summary, genres}){
    return(
        <div>
        <img src ={coverImage} alt={title}></img>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map( (g) => (
            <li key ={g}>{g}</li>
          ))}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}