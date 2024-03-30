function Drink({ name }) { 
  const drinks = {
    tea: {
      type: 'leaf',
      price: '15–70 mg/cup',
      age:'4,000+ years'
    },
    coffee: {
      type: 'bean',
      price: '80–185 mg/cup',
      age:'1,000+ years'
    }
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drinks[name].type}</dd>
        <dt>Caffeine content</dt>
        <dd>{drinks[name].price}</dd>
        <dt>Age</dt>
        <dd>{drinks[name].age}</dd>
      </dl>
    </section>
  );
}

export default function Demo() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
