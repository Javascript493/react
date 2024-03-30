import { useState } from "react"

function ProductCategoryRow ({category}) {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  )
}

// 产品类
function ProductRow({product}) {
  const name = product.stocked ? product.name : 
  (
    <span style={{color: 'red'}}>
      {product.name}
    </span>
  )
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProducTable({filterText, inStockOnly, products}) {
  const rows = []
  let nextCategory = null
  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1) {
      return 
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if(product.category !== nextCategory) {
      rows.push((
        <ProductCategoryRow key={product.category} category={product.category}></ProductCategoryRow>
      ))
    }
    rows.push((
      <ProductRow key={product.name} product={product}></ProductRow>
    ))
    nextCategory = product.category
  })
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
        {rows}
      </thead>
    </table>
  )
}

// 搜索
function SearchBar({filterText, onFilterTextChange, onInStockOnly}) {
  return <form>
    <input value={filterText}
     type="text" placeholder="请输入"
     onChange={(e) => {onFilterTextChange(e.target.value)}}/>
    <label>
      <input
        type="checkbox" 
        onChange={(e) => {
          onInStockOnly(e.target.value)
        }}/>{'  '}
      Only show products in stock
    </label>
  </form>
}

function FilterableProductTable ({products}) {
  const [filterText, setFilterText] = useState('fruit')
  const [inStockOnly, setInStockOnly] = useState(false)
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnly={setInStockOnly} />
      <ProducTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products} />
    </div>
  )
}

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
export default function Demo () {
  return (
    <FilterableProductTable products={products}></FilterableProductTable>
  )
}