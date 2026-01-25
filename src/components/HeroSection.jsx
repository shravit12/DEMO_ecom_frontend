import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        
          <source src="/Shopping_V1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur">
            ⚡ Custom Store
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
            Shop Smarter.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Live Better.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            A premium e-commerce experience with modern UI, fast performance,
            and scalable architecture.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            {/* Scroll to Products section */}
            <button
              onClick={() => {
                const el = document.getElementById("products-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </button>

            {/* Navigate to collection route */}
            <Link
              to="/products"
              className="px-7 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
