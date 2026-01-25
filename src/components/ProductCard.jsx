import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between h-[150px]">
        <h2 className="text-base font-semibold line-clamp-2 text-gray-900 hover:text-purple-600 transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-gray-600 mt-1 font-medium">₹ {Math.round(product.price * 80)}</p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`mt-3 w-full py-2 rounded-xl font-semibold text-white transition-all duration-300
            ${added 
              ? "bg-green-500 hover:bg-green-600 shadow-lg transform scale-105"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg"}`
          }
        >
          {added ? "Added ✅" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
