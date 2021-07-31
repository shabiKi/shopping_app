import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomScreen.css";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      async function fetchUserData() {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(data);
      }
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
