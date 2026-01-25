import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * 80 * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 underline">Go shopping</Link></p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white rounded-lg p-4 shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} className="h-16 w-16 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Qty: {item.qty}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold">₹ {Math.round(item.price * 80 * item.qty)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ₹ {Math.round(total)}</h2>
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Clear Cart
            </button>
          </div>
          <button className="w-full mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
