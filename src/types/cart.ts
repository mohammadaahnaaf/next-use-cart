export interface CartItem {
    id: number;
    name: string;
    qty: number;
  }
  
  export interface CartContextType {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateItem: (id: number, qty: number) => void;
    getTotalItemCount: () => number;
  }
  