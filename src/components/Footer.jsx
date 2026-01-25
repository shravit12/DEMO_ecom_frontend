export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold">ClientBrand</h2>
          <p className="mt-4 text-sm">
            Modern e-commerce platform built with React, TailwindCSS and scalable architecture.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">All Products</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Trending</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@clientbrand.com</li>
            <li>Phone: +91 90000 00000</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} ClientBrand. All rights reserved.
      </div>
    </footer>
  );
}
