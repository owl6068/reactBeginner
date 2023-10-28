import btnStyle from '../css/module/Button.module.scss'
function Button ({text,clickEvent}) {
  return(
    <button className={btnStyle.btn} onClick={clickEvent}>{text}</button>
  )
}
export default Button