import { Link } from "react-router-dom"

function Home(){
  return (
    <div>
      <h1 className="title__page">Home</h1>
      <h2 className="title__sub">Example</h2>
      <div className="py-4">
        <Link to='/todo' className="btn__link">ToDo List</Link>
        <Link to='/coin' className="btn__link ml-2">Coin Tracker</Link>
        <Link to='/movie' className="btn__link ml-2">Movie Search</Link>
      </div>
      <h2 className="title__sub">Study</h2>
      <div className="py-4">
        <Link to='/studyuseeffect' className="btn__link">Study UseEffect</Link>
      </div>
    </div>
  )
}

export default Home