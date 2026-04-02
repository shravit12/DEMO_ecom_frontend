import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar';
import ProductsPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

// Local products list (mock data)
const mockProducts = [
  {
    id: "1",
    title: "Stylish T-Shirt",
    price: 499,
    category: "clothing",
    description: "A very comfortable and stylish t-shirt for daily wear.",
    image: "https://images.pexels.com/photos/27078903/pexels-photo-27078903.jpeg",
  },
  {
    id: "2",
    title: "Running Shoes",
    price: 1499,
    category: "footwear",
    description: "Perfect shoes for running and sports activities.",
    image: "https://images.pexels.com/photos/18066208/pexels-photo-18066208.jpeg",
  },
  {
    id: "3",
    title: "Smart Watch",
    price: 2999,
    category: "electronics",
    description: "Keep track of your health and notifications with style.",
    image: "https://images.pexels.com/photos/18662969/pexels-photo-18662969.jpeg",
  },
];

export default function App() {
  const [products] = useState(mockProducts); // Use local list directly

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProductsPage products={products} />
                </>
              }
            />
            <Route
              path="/products"
              element={<ProductsPage products={products} id="products-section" />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
