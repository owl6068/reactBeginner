import CoinTracker from "./example/CoinTracker";
import ToDoList from "./example/TodoList";
import StudyUseEffect from "./study/UseEffect"
function App() {
  return (
    <div className="App">
      {/* study */}
      { false ? <StudyUseEffect/> : null}

      {/* example */}
      { false ? <ToDoList/> : null}
      { true ? <CoinTracker/> : null}
    </div>
  );
}

export default App;
