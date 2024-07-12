import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartContextType } from '../types/cart';

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;