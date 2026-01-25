import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product)
    return <div className="text-center mt-20 text-gray-600 animate-pulse">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
      
      {/* Product Image */}
      <div className="relative md:w-1/2 bg-white/50 backdrop-blur-md rounded-3xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
          <p className="text-purple-600 font-medium capitalize">{product.category}</p>
          <p className="text-2xl font-bold text-gray-800">₹ {Math.round(product.price * 80)}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <button
            onClick={handleAddToCart}
            className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300
              ${added
                ? "bg-green-500 shadow-xl scale-105"
                : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl"}`}
          >
            {added ? "Added ✅" : "Add to Cart"}
          </button>

          <Link
            to="/checkout"
            className="px-8 py-3 rounded-2xl border border-gray-800 text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
