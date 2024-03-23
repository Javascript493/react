// react 中没有明确判断的语句，但是我们可以通过js代码来判断使用的语句
import { useState } from 'react'
function TureCom() {
  return <h1>正确的组件</h1>
}

function FalseCom () {
  return <h1>错误的组件</h1>
}

const getView = (status) => {
  if(status) {
    return TureCom()
  }
  return FalseCom()
}

const status = true

export default function () {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  const listItems = products.map(product => <li key={product.id} onClick={ add }>{product.title}</li>)
  const [count, setCount] = useState(0)
  function add () {
    // alert('制作一个添加事件')
    setCount(count+ 1)
  }
  return <> 
  {/* {getView(false)}
  { false ? TureCom() : FalseCom() }
  { true && TureCom() } */}
  <p>点击总数：{count}</p>
  <ul>
    {listItems}
  </ul>
  </>
}