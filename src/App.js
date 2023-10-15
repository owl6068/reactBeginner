import ToDoList from "./example/TodoList";
import StudyUseEffect from "./study/UseEffect"
function App() {
  return (
    <div className="App">
      {/* study */}
      { false ? <StudyUseEffect/> : null}

      {/* example */}
      { true ? <ToDoList/> : null}
    </div>
  );
}

export default App;
