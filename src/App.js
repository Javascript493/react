import './App.css';
import { useState } from 'react'
// import './components/demo.css'
import Demo from './components/demo3'
import Game from './components/game'

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

export default App;
