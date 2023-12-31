import { useState } from 'react';
import './App.css';

function App() {
  
  let [counter, setCounter] = useState(1);
  const addValue = ()=>{
    if(counter<20){
      setCounter(counter * 2 );
    }
    // console.log("Value added", counter);
  }
  
  const subValue =()=>{
    if(counter>0){
      setCounter (counter -1 );
    }
    console.log("Value substract", counter);
  }
  return (
    <> 
      <div className='App'>
        <h1>Roshan React</h1>
        <h2> React hit counter value : {counter+5}</h2>
        <button onClick={addValue}>Add me</button>
        <br />
        <button onClick={subValue}>Substract me</button>
      </div>
    </>
  );
}

export default App;
