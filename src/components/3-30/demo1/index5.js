function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function ProfileImg({imageId, alt, size}) {
  const urlSize = size > 90 ? 'b' : 's'
  return (
    <img
      className="avatar"
      src={getImageUrl(imageId, urlSize)}
      alt={alt}
      width={size}
      height={size}
    />
  )
}

function Profile ({title, img, profession, awards, discovered }) {
  return (
    <section>
      <h2>{title}</h2>
      <ProfileImg {...img}></ProfileImg>
      <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.lnegth} </b> 
            ({awards.join('、')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
    </section>
  )
}
// 优化整体组件 抽取新的组件并设计props
const list = [
  { title: 'Maria Skłodowska-Curie', img: {imageId: 'szV5sdG', size: 100, alt: 'Maria Skłodowska-Curie'},
    profession: 'physicist and chemist', awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
    discovered: 'polonium (chemical element)'},
  { title: 'Katsuko Saruhashi', img: {imageId: 'YfeOqp2', size: 70, alt: 'Katsuko Saruhashi'}, 
  profession: 'geochemist', awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
  discovered: 'a method for measuring carbon dioxide in seawater'}
]
export default function Demo() {
  const renders = list.map((item, index) => {
    return (
      <Profile {...item}>
      </Profile>
    )
  })
  return (
    <div>
      <h1>Notable Scientists</h1>
      {renders}
    </div>
  );
}
