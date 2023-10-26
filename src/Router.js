
import Home from "./Home";
import Study01 from "./study/UseEffect"
import ToDo from "./example/TodoList"
import Coin from "./example/CoinTracker"
import Movie from "./example/Movie"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/studyuseeffect' element={<Study01/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
        <Route path='/todo' element={<ToDo/>}></Route>
        <Route path='/coin' element={<Coin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


