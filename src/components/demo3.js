export default function MyButton (props) {
  // 接受了一个props
  const { count, onClick } = props
  return (
    <>
      <p>被点击的次数：{count}</p>
      <button onClick={onClick}>我是一个按钮</button>
    </>
  )

}