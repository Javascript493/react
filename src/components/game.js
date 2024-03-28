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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { status: true, line: [a, b, c] }
    }
  }
  return { status: false, line: [] }
}
// 方块
function Square ({ value, line, index, onSquareClick }) {
  const className = `square ${line.includes(index) ? 'light' : ''}`
  return <button className={className} onClick={onSquareClick}>{value}</button>
}
function Board ({ xIsNext, squares, onPlay, boardSize, curMove }) {
  const { status: winUser, line } = calculateWinner(squares)
  const curValue = xIsNext ? 'X' : '√'
  const [row, cell] = boardSize
  let tip = ''
  if (winUser) {
    tip = `所持有${winUser}获胜`
  } else if (curMove === row * cell) {
    tip = '这一局是平局没有人获胜'
  } else {
    tip = '下一步到：' + curValue

  }
  function handleClick (index) {
    if (squares[index] || winUser) return
    const nextSquares = squares.slice()
    nextSquares[index] = curValue
    onPlay(nextSquares)
  }

  const getBoardRow = () => {
    const doms = []
    for (let i = 0; i < row; i++) {
      const cells = []
      for (let j = 0; j < cell; j++) {
        const index = i * cell + j
        cells.push((
          <Square key={j} value={squares[index]} line={line} index={index} onSquareClick={() => { handleClick(index) }} />
        ))
      }
      doms.push((
        <div className='board-row' key={i}>
          {cells}
        </div>
      ))
    }
    return doms
  }
  const boardRow = getBoardRow()
  return (
    <>
      <h1>{tip}</h1>
      {boardRow}
    </>
  );
}

export default function Game () {
  const [curMove, setCurmove] = useState(0)
  const xIsNext = curMove % 2 === 0
  const [asc, setAsc] = useState(true)
  const [historys, setHistory] = useState([Array(9).fill(null)])
  const [boardSize, setBoardSize] = useState([3, 3])
  let curSquers = historys[curMove]
  function handlPlay (nextSquares) {
    // 怎么玩
    const nextHistorys = [...historys.slice(0, curMove + 1), nextSquares]
    setHistory(nextHistorys)
    setCurmove(nextHistorys.length - 1)
    setHistory(nextHistorys)
  }

  function jumTo (move) {
    // 回退到哪一步
    setCurmove(move)
  }
  let moves = historys.map((squares, index) => {
    let desc = ''
    const move = asc ? index : historys.length - index - 1
    if (asc ? move > 0 : move !== 0) {
      desc = '回退到这一步：' + move
    } else {
      desc = '回道开始'
    }
    return (
      <li key={move}>
        <button onClick={() => jumTo(move)}>{desc}</button>
      </li>
    )
  })

  const handleReverseHistorys = () => {
    setAsc(!asc)
  }
  return (
    <div className='game'>
      <div className='content'>
        <Board xIsNext={xIsNext} squares={curSquers} onPlay={handlPlay} boardSize={boardSize} curMove={curMove}></Board>
      </div>
      <div className='history'>
        <button onClick={handleReverseHistorys}>切换顺序</button>
        <ul>
          {moves}
        </ul>
      </div>
    </div>
  )
}