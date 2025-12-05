import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
  };
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-3"
                />

                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>

                <p className="text-sm text-gray-500 mb-1">
                  Category:{" "}
                  <span className="text-gray-700">{item.category}</span>
                </p>

                <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                  {item.description}
                </p>

                <p className="font-semibold text-gray-800 mb-1">
                  Price: ₹{item.price}
                </p>

                <p className="text-sm text-gray-600">
                  Rating: ⭐ {item.rating.rate} ({item.rating.count} reviews)
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
