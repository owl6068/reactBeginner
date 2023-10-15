import { useState, useEffect } from "react";
import Button from "./component/Button";
import Input from "./component/Input";

function Create (){
  useEffect(()=>{
    console.log('생성되었다!') // creat시 출력
    return () => console.log('삭제되었다!') //함수형으로 실행해야 삭제시에 적용 (destroy될때 출력)
  }, []);
  return <p style={{fontSize:50}}>생성되었습니다.</p>
}

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [show, setShow] = useState(true);
  const onCounter = () => {
    setCount((value) =>  value += 1)
  }
  const onChange = (event) => {
    setText(event.target.value)
  }
  const onDestroy = () => {
    setShow(show => !show)
  }
  console.log('계속 출력')
  useEffect(() => {
    console.log('페이지 생성때 한번만 출력')
  }, [])
  useEffect(() => {
    console.log('count가 증가 할때 마다 출력')
  }, [count])
  useEffect(() => {
    console.log('input에 문자가 변경 될때 마다 출력')
  }, [text])
  return (
    <div className="App">
      <h2>복습</h2><br/><br/>
      <Input value={text} changeEvent={onChange}/>&nbsp;&nbsp;<span>실시간 변경:{text}</span>
      <br/><br/><br/><hr/><br/>
      <p style={{fontSize:50}}>{count}</p>
      <Button text="counter" clickEvent={onCounter}/>
      <br/><br/><br/><hr/><br/>
      <h2>useEffect</h2><br/><br/>
      {show ? <Create/> : null }
      <Button text={show ? '삭제' : '생성'} clickEvent={onDestroy}/>
    </div>
  );
}

export default App;
