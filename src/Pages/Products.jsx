import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/get');
      const data = response.data;
      setProducts(data.products); // Set fetched data to the state
      console.log(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    getProducts();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Calculate the index range of products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-wrap my-10 mx-5">
      {/* Display fetched products */}
      {currentProducts.map((product, index) => (
        <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-slate-100 p-4 rounded">
            <img src={product.imageURL} alt={product.title} />
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-sm">${product.price}</p>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="w-full flex justify-center mt-5">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index} className="mx-1 px-3 py-1 bg-gray-300" onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
