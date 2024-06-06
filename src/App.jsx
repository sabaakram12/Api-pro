// App.js
import React, { useState, useEffect } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import ProductList from './components/ProductList/ProductList';
import './App.css'; // Import your main CSS file for global styles

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const selectCategory = category => {
    setSelectedCategory(category);
  };

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="app">
      <CategoryList products={products} onSelectCategory={selectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;


