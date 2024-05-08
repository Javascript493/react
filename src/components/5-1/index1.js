import { useImmer } from "use-immer"
export default function Demo() {
  const [arr, updateArr] = useImmer([])
  function handleClick() {
    updateArr(darft => {
      darft.push({name: 'Faker'})
    })
  }
  return <div>
    <ul>
      {arr.map(i => <li key={i.name}>i.name</li>)}
    </ul>
    <button onClick={handleClick}>添加一个职业选手</button>
  </div>
}