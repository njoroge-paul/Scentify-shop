import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function AddToCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const perfume = location.state;

  const [cart, setCart] = useState({});

  useEffect(() => {
    if (perfume) {
      const existingQuantity = cart[perfume.id] || 0;
      setCart((prevCart) => ({ ...prevCart, [perfume.id]: existingQuantity + 1 }));
    }
  }, [perfume]);

  const handleRemoveFromCart = (perfumeId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[perfumeId];
      return newCart;
    });
  };

  return (
    <div className="h-[60vh] flex flex-col">
      <Navbar />
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-4">My cart</h1>
        <ul className="list-none mb-4">
          {Object.keys(cart).map((perfumeId) => (
            <li key={perfumeId} className="flex justify-between items-center mb-2">
              <img src={perfume.image} alt={perfume.name} className="w-12 h-12 mr-4" />
              <span className="text-lg">{perfume.name}</span>
              <span className="text-lg font-bold">${perfume.price} x {cart[perfumeId]}</span>
              <button
                onClick={() => handleRemoveFromCart(perfumeId)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default AddToCart;