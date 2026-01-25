import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar';
import ProductsPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data); // DEBUG → check console
        setProducts(data);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />

          <Routes>
            <Route path="/" element={<><HeroSection /><ProductsPage products={products} /></>} />
             <Route path="/products" element={<ProductsPage products={products} id="products-section" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
