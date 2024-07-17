import React, { createContext, useState, useEffect } from 'react';
import { CartContextType, CartItem } from '../types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const totalUniqueItems = cart.length;
    const totalItems = cart.reduce((total, item) => total + item.qty, 0);

    useEffect(() => {
        setLoading(true);
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        const newCart = JSON.stringify(cart);
        localStorage.setItem('cart', newCart);
    }, [cart]);

    const addItem = (item: CartItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    };

    const emptyCart = () => {
        setCart([]);
    };

    const removeItem = (id: number | string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateItem = (id: number | string, qty: number) => {
        setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, qty } : item));
    };

    return !loading ? (
        <CartContext.Provider value={{ totalItems, totalUniqueItems, cart, addItem, removeItem, updateItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    ) : null;
};

export { CartProvider, CartContext };
