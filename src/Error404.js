import { Link } from "react-router-dom";

function error(){
  return(
    <div className="page__center">
      <h1 className="title__page">웹페이지를 찾을수 없습니다.</h1>
      <Link to="/" className="btn__primary mt-8"> 홈으로 </Link>
    </div>
  )
}

export default error;