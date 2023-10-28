
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Error404';
import Home from './Home';
import Study01 from './study/UseEffect'
import ToDo from './example/TodoList'
import Coin from './example/CoinTracker'
import Movie from './example/Movie'
import MovieDetail from './example/MovieDetail';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Error/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<ToDo/>} />
        <Route path='/coin' element={<Coin/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/movie/:id' element={<MovieDetail/>} />
        <Route path='/studyuseeffect' element={<Study01/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


