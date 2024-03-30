// jsx 通过props 传递

function Son () {
  return (
    <p>我是儿子组件</p>
  )
}


function Father({children}) {
  console.log(children, 'children')
  return (
    <div>
      我是父亲组件
      {children}
    </div>
  )
}

export default function Demo () {
  return (
    <Father>
      <Son></Son>
      <h1>是吗</h1>
    </Father>
  )
}