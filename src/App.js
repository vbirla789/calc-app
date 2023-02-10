import React,{useState} from "react";
import "./index.css"

function App() {

  const dig =() => {
    const digArr =[]

    for( let i=1; i<10; i++){
      digArr.push 
        (<button key={i} onClick={() => updateCalc(i.toString())}> {i} </button>
      )}
    return digArr
  }

const[calc, setCalc]=useState('')
const[result, setResult]=useState('')

const ops =['/', '*', '+', '-', '.']

const updateCalc = value => {

  if (ops.includes(value) && calc === ''||
  ops.includes(value) && ops.includes(calc.slice(-1))){
    return
  }

  setCalc(calc + value)

  if(!ops.includes(value)){
    setResult(eval(calc+ value )
    )
  }
  
}

const calculate =()=>{
  setCalc(eval(calc).toString())
}

const del=()=>{
  setCalc('')
  setResult('')
}


  return (
    <div className="App">
      <div className="calc">

        <div className="display">
          { calc || ''} { result ? <span className="res">({result})</span> : ''}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')} >/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>
        </div>

        <div className="digits">
          {dig()}
          
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={del}>del</button>
          <button className="del" onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
