import Button from "./button"
function PlayButton () {
  const handlPlay =() => {
    alert('放电影')
  }
  return <button onClick={handlPlay}>
    播放电影
  </button>
}
function MusicButton (){
  const handlPlay = () => {
    alert('放音乐')
  }
  return <button onClick={handlPlay}>
    播放音乐
  </button>
}
export default function Demo() {
  return <div>
    <PlayButton/>
    <MusicButton/>
  </div>
}