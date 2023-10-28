function Input({text, changeEvent}){
  return (
    <input type='text' value={text} onChange={changeEvent} placeholder='값을 넣어 주세요' />
  )
}
export default Input