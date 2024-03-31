
export default function Demo({ person }) {
  return (
    <div>
      <Header {...person}/>
      <Avatar {...person}/>
    </div>
  )
}

function Header({name}) {
  return <h1>{name}</h1>;
}

function Avatar({name}) {
  return (
    <img
      className="avatar"
      alt={name}
      width={50}
      height={50}
    />
  );
}
