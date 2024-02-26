import React,{setState} from "react"
import "./styles.css"

const InputComponent = ({
  //Props used for data Exchange
  type,
  state,
  setState,
  placeholder,
  required
}) => {
  return (
      <input type={type} 
      value={state} 
      onChange={(e)=>setState(e.target.value)} 
      placeholder={placeholder}
      className="custom-input"
      required = {required}/>
  )
};

export default InputComponent;
