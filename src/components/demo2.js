import './demo.css'
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
function MyButton () {
  return ( 
    <>
    <button className="my__button">I'm a button </button>
    <img 
      className='img'
      src={user.imageUrl} 
      alt={'hello' + user.name} 
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}/>
    </>
  )
}

export default function Demo () {
  return (
    <>
      <h1>一个新的组件</h1>
      <MyButton></MyButton>
    </>
  )
}