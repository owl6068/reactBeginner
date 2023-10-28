import { useLocation  } from 'react-router-dom';
import './css/movie.scss'
function MovieDetail(){
  const location = useLocation();
  const detail = location.state.props;
  return(
    <div className='movieDetail'>
      <div>
        <img src={detail.large_cover_image} />
      </div>
      <div>
        <h2 className='title__sub mt-0'>{detail.title}</h2>
        <ul>
          <li> 
            장르 : 
            {detail.genres.map((data ,i) => ( <span key={i} className='tag'>{data}</span>))}
          </li>
          <li className='mt-3'>개봉 : {detail.date_uploaded}</li>
          <li className='mt-3'>랭킹 : {detail.rating}</li>
          <li className='mt-3'>설명 : {detail.summary}</li>
        </ul>
      </div>
    </div>
  )
}

export default MovieDetail