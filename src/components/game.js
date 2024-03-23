import './game.css'
import { useState } from 'react'

// 计算一个获胜者
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i = 0; i < lines.length ; i++) {
    const [a, b, c] = lines[i]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
      return squares[a]
    }
  }
  return null
}
// 方块
function Square({value, onSquareClick})  {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}
function Board({xIsNext, squares, onPlay}) {
  const winUser = calculateWinner(squares)
  const curValue =  xIsNext ? 'X' : '√'
  let tip = ''
  if(winUser) {
    tip =  `所持有${winUser}获胜`
  } else {
    tip = '下一步到：' + curValue
  }
  function handleClick(index) {
    if(squares[index] || winUser) return
    const nextSquares = squares.slice()
    nextSquares[index] = curValue
    onPlay(nextSquares)
  }
  return (
    <>
      <h1>{tip}</h1>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => {handleClick(0)}}/>
        <Square value={squares[1]} onSquareClick={() => {handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={() => {handleClick(2)}}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]}  onSquareClick={() => {handleClick(3)}}/>
      <Square value={squares[4]} onSquareClick={() => {handleClick(4)}}/>
      <Square value={squares[5]} onSquareClick={() => {handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={() => {handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={() => {handleClick(8)}}/>
      </div>
    </>
  );
}

export default function Game () {
  const [curMove, setCurmove] = useState(0);
  const xIsNext = curMove % 2 === 0
  const [historys, setHistory] = useState([Array(9).fill(null)])
  let curSquers = historys[curMove]
  function handlPlay(nextSquares) {
    // 怎么玩
    
    const nextHistorys = [...historys.slice(0, curMove + 1), nextSquares]
    setHistory(nextHistorys)
    setCurmove(nextHistorys.length - 1)
  }

  function jumTo (move) {
    // 回退到哪一步
    setCurmove(move)
  }
  const moves = historys.map((squares, move) => {
    let desc = ''
    if(move > 0) {
      desc = '回退到这一步：' + move
    } else {
      desc = '回道开始'
    }
    return (
      <li> 
        <button onClick={() => jumTo(move)}>{desc}</button>
      </li>
    )
  })
  return (
  <div className='game'>
    <div className='content'>
      <Board xIsNext={xIsNext} squares={curSquers} onPlay={handlPlay}></Board>
    </div>
    <div className='history'>
      <ul>
        {moves}
      </ul>
    </div>
  </div>
  )
}