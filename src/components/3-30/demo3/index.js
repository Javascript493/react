import { Fragment } from 'react'
function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

const people = [
  '凯瑟琳·约翰逊: 数学家',
  '马里奥·莫利纳: 化学家',
  '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
  '珀西·莱温·朱利亚: 化学家',
  '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
];
const people1 = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  imageId: 'MK3eW3A',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  imageId: 'MK3eW3A',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
  imageId: 'MK3eW3A',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  imageId: 'MK3eW3A',
}];
export default function Demo () {
  const listItems = people.map(p => <li>{p}</li>)
  const chemistListImtes = people1.filter(p => p.profession === 'chemist').map(p => {
    return (
      <Fragment >
        <img src={getImageUrl(p)}/>
        <p>
        <b>{p.name}:</b>
        {' ' + p.profession + ' '}
        因{p.accomplishment}而闻名世界
      </p>
      </Fragment>
    )
  })
  return <div>
    <ul>
      {/* {listItems} */}
      {chemistListImtes}
    </ul>
  </div>
}