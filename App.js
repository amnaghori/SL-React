import React,{useState} from 'react'
import Child from './Child'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Child data={count}/>
     <button onClick={()=>{setCount(count+1)}} >Click Me</button>
    </div>
  );
}

export default App;
