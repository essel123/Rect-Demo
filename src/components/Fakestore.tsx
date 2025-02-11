// Fakestore.tsx
import React, { useEffect, useState } from "react";
import Select from "./CategorySelect"; // Import the Select component
import SearchBoxWithSuggestions from "./SearchBox"; // Import the new SearchBox component
import "../css/test.css";

import LoadingSpinner from "./LoadingSpinner";
import LightBox from "./LightBox";

const Fakestore: React.FC = () => {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Selected category
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term in input
  const [loading, setLoading] = useState<boolean>(true);
  const [lightBox, setLightBox] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Get unique categories from products
  const categories = Array.from(
    new Set(products.map(product => product.category))
  );

  // Handle category change from search or dropdown
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle category selection from search suggestions
  const handleCategorySelect = (category: string) => {
    setSearchTerm(category); // Set the search term to the selected category
    setSelectedCategory(category); // Set the selected category
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="m-5">
      {lightBox &&
        <LightBox
          image={image}
          close={true}
          onClose={() => setLightBox(false)}
        />}
      {/* Search box with suggestions */}
      <SearchBoxWithSuggestions
        searchTerm={searchTerm}
        categories={categories}
        onSearchChange={handleSearchChange}
        onCategorySelect={handleCategorySelect}
      />

      {/* Category Select component */}
      <Select
        options={categories}
        selectedValue={selectedCategory}
        onChange={event => setSelectedCategory(event.target.value)}
        label="Select Category"
        className="mb-5"
      />

      {/* Loading state rendering */}
      {loading
        ? <LoadingSpinner />
        : <div className="flex justify-evenly flex-wrap m-5">
            {filteredProducts.map(product =>
              <div
                key={product.id}
                className="w-72 h-auto shadow rounded bg-white mb-2"
              >
                <div className="p-2">
                  <div className="flex justify-center h-52">
                    <img
                      className="w-40 cursor-pointer"
                      src={product.image}
                      alt={product.title}
                      onClick={() => {
                        setImage(product.image);
                        setLightBox(true);
                      }}
                    />
                  </div>
                  <h1 className="my-2 text-sm text-black text-center">
                    {product.category}
                  </h1>
                  <p className="my-2 text-bold text-xl text-orange-400">
                    ${product.price}
                  </p>
                </div>
              </div>
            )}
          </div>}
    </div>
  );
};

export default Fakestore;
