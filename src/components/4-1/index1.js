import Button from "./button"
function PlayButton () {
  const handlPlay =() => {
    alert('放电影')
  }
  return <Button onClick={handlPlay}>
    播放电影
  </Button>
}
function MusicButton (){
  const handlPlay = () => {
    alert('放音乐')
  }
  return <Button onClick={handlPlay}>
    播放音乐
  </Button>
}
export default function Demo() {
  const handleClick = () => {
    alert('父级')
  }
  return <div style={{
    width: '100vh',
    height: '80px',
    backgroundColor: 'red'
  }} onClickCapture={handleClick}>
    <PlayButton/>
    <MusicButton/>
  </div>
}