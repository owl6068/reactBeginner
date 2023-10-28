import { useState, useEffect } from 'react';
import Button from './component/Button';
import Input from './component/Input';

function Create (){
  useEffect(()=>{
    console.log('생성되었다!') // creat시 출력
    return () => console.log('삭제되었다!') //함수형으로 실행해야 삭제시에 적용 (destroy될때 출력)
  }, []);
  return <p style={{fontSize:50}}>생성되었습니다.</p>
}

function UseEffect() {
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
    <div>
      <h1 className='title__page'>state, props, useEffect</h1>
      <h2 className='title__sub mt-10'>실시간 문구 변경</h2>
      <Input value={text} changeEvent={onChange}/>
      <p className='pt-4'>실시간 변경:{text}</p>
      <hr className='my-6'/>
      <h2 className='title__sub mt-10'>counter 증가</h2>
      <p style={{fontSize:50}}>{count}</p>
      <Button text='counter' clickEvent={onCounter}/>
      <hr className='my-6'/>
      <h2 className='title__sub mt-10'>useEffect 상황별 확인</h2>
      <div className='my-6'>{show ? <Create/> : null }</div>
      <Button text={show ? '삭제' : '생성'} clickEvent={onDestroy}/>
    </div>
  );
}

export default UseEffect;
