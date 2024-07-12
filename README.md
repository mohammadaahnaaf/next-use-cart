# next-use-cart

A React hook and context for managing a shopping cart with localStorage.

## Installation

To install the package, run:

```bash
npm install react-use-cart

```

Using yarn,

```bash
yarn add react-use-cart

```

# Usage

## 1. Wrap Your Application with CartProvider

In your main application file (e.g., \_app.tsx in a Next.js application), wrap your application with the CartProvider to provide the cart context to all components:

```c
// pages/_app.tsx
import { AppProps } from 'next/app';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
```

## 2. useCart hook

```c
import { useCart, CartItem } from 'react-use-cart';

const ItemList: React.FC = () => {
  const { addItem } = useCart();

    let product = { id: 1, name: 'Product-1', qty: 1 }
    return (
        <div>
            <button onClick={() => addItem(product)}> Add to cart </button>
        </div>
)}

```

## API

### CartProvider

Wrap your application with CartProvider to provide the cart context to all components.

### useCart

A hook to access the cart context. Returns an object with the following properties and methods:

```c
cart: CartItem[]: The current cart items.
totalItems: number: Returns the total number of items in the cart (sum of quantities).
totalUniqueItems: number: Returns the total number of unique items in the cart.
addItem: (item: CartItem) => void: Adds an item to the cart. If the item already exists, increments the quantity by 1.
removeItem: (id: number) => void: Removes an item from the cart by its ID.
updateItem: (id: number, qty: number) => void: Updates the quantity of an item in the cart.
emptyCart: () => void: Removes all the cart items.

```

# MIT

```bash
This `README.md` file contains all the code and instructions you need to set up and use the `next-use-cart` package, ready to be copied and pasted for proper output.
```

# Ownership

This package is developed and owned by Mohammed Ahnaf.
