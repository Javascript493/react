function Avatar({name, size = 100}) {
  //  默认值仅在undefined 中生效
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt={name}
      width={100}
      height={100}
    />
  );
}

export default function Demo() {
  const props = {
    name: 'heyunfei',
    siez: 100
  }
  return (
    <Avatar {...props}/>
  );
}
