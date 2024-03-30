import { people } from './data.js';
import { getImageUrl } from './utils.js';

function Item({name, profession, accomplishment, imageId}) {
  return <li>
      <img
        src={getImageUrl(imageId)}
        alt={name}
      />
      <p>
        <b>{name}:</b>
        {' ' + profession + ' '}
        因{accomplishment}而闻名世界
      </p>
  </li>

}

export default function Demo() {
    const chemists = people.filter(p => p.profession === '化学家').map(p => <Item key={p.id} {...p}></Item>)
    const others = people.filter(p => p.profession !== '化学家').map(p => <Item key={p.id} {...p}></Item>)
  return (
    <article>
      <h1>化学家</h1>
      <ul>{chemists}</ul>
      <h1>其余学家</h1>
      <ul>{ others }</ul>
    </article>
  );
}
