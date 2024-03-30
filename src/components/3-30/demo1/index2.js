const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  img: {
    class: 'avatar',
    src: "https://i.imgur.com/7vQD0fPs.jpg",
    alt: "Gregorio Y. Zara"
  },
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function Demo() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className={person.img.class}
        src={baseUrl + person['imageId'] + person['imageSize'] + '.jpg'}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}