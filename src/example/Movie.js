import { useEffect, useState } from 'react';
import Loading from './component/Loading';
import MovieButton from './component/MovieButton';
import style from './css/module/Movie.module.scss';

function Movie(){
  const [loading , setLoading] = useState(true); 
  const [movies, setMovies] = useState([]); // 영화
  const getMovies = async () => {
    const response = await( await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count`)).json()
    setMovies(response.data.movies);
    setLoading(false)
  }

  useEffect(()=>{
    getMovies();
  },[])

  return(
    <div className='movie'>
      <h1 className='title__page'>Movie</h1>
      {loading ? <Loading/>: 
      <ul className={style.box}>
        { movies.map((movie,i) => (
          <MovieButton key={movie.id} props={movie}/>
        ))}
      </ul>
      }
    </div>
  )
} 

export default Movie