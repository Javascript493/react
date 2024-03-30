function Item({ name, isPacked }) {
  // if(isPacked) {
  //   return <li className="item">{name} ✔</li>;
  // }
  // return <li className="item">{name}</li>;
  // return (
  //   <li className="name">
  //     {isPacked ? (<del>{name + "✔"}</del>) : name}
  //   </li>
  // )

  // isPacked  只有boolean null 和 undefined时，才会渲染 gou ， 切勿使用数字进行判断
  return <li>
    {name} {isPacked && 'gou'}
  </li>
}

export default function Demo() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="宇航服" 
        />
        <Item 
          isPacked={true} 
          name="带金箔的头盔" 
        />
        <Item 
          isPacked={false} 
          name="Tam 的照片" 
        />
      </ul>
    </section>
  );
}
