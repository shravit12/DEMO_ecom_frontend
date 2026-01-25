import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products }) {
  if (!products || products.length === 0) 
    return <p className="text-center mt-20 text-gray-600 animate-pulse">Loading...</p>;

  return (
    <div id="products-section" className="max-w-7xl mx-auto px-6 py-16 ">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Products</h2>

      {/* Products Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div key={p.id} className="relative group">
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-lg z-10">
              {p.category}
            </div>

            {/* Product Card */}
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {/* Show more / pagination placeholder */}
      <div className="mt-14 flex justify-center">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          Load More Products
        </button>
      </div>
    </div>
  );
}
