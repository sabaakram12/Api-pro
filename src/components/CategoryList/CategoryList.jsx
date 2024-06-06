// CategoryList.js
import React from 'react';
import './CategoryList.css';

function CategoryList({ products, onSelectCategory }) {
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;


