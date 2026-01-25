import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent  hover:bg-black/90 hover:backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
  <Link to="/" className="hover:text-gray-300 transition">
    CLIENT BRAND
  </Link>
</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Cart button */}
          <Link
            to="/checkout"
            className={`px-4 py-2 rounded-lg font-medium transition
              ${scrolled
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-white/10 text-white hover:bg-white/20"}`}
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
          {/* Cart always visible */}
          <Link
            to="/checkout"
            className={`px-3 py-1 rounded-lg font-medium text-sm bg-white/10 text-white hover:bg-white/20`}
          >
            Cart
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-4 animate-slide-down">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 transition text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
