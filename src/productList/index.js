// src/productList/index.js
export function ProductList({ products }) {
  return (
    <div className='form-container'>
      <h2>Shopping List</h2>
      <div className='two-column-list'>
        <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} <span>${product.price}</span>
          </li>
      ))}
        </ul>
      </div>
    </div>
  );
}


