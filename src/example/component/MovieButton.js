import { Link } from 'react-router-dom';

function MovieDetail({props}){
  return(
    <li>
      <Link to={'/movie/' + props.id} state={{ props: props }}>
        <img src={props.large_cover_image} alt={props.title + '포스터'} />
        <p>{props.year}</p>
        <h2 className='title__sub sm'>{props.title}</h2>
      </Link>
    </li>
  )
} 

export default MovieDetail