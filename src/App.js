import './App.css';
import { useState } from 'react'
// import './components/demo.css'
// import Demo from './components/demo3'
// import Game from './components/game'
// import Demo from './components/3-30/demo3/index3'
import Demo from './components/4-1/组件的记忆/index1'

function App() {
  return (
    <div className="App">
      <Demo stories={[{id:1, label:'hh'}]}></Demo>
    </div>
  );
}

export default App;
