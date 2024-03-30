
import { recipes } from './data2.js';
function Recipe({id, name, ingredients }) {
  const items = ingredients.map(i => <li key={i}>{i}</li>)
  return <div>
    <h2>{name}</h2>
    <ul>
      {items}
    </ul>
  </div>
}
export default function RecipeList() {
  const listItems = recipes.map(recipe => {
    return (
      <Recipe {...recipe}  key={recipe.id}></Recipe>
    )
  })
  return (
    <div>
      <h1>菜谱</h1>
      {listItems}
    </div>
  );
}
