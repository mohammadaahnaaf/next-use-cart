export interface CartItem {
  id: number | string;
  qty: number;
  name?: string;
  images?: string[]
  category?: string
  description?: string
  tags?: string[];

}

export interface CartContextType {
  cart: CartItem[];
  totalUniqueItems: number
  totalItems: number
  addItem: (item: CartItem) => void;
  removeItem: (id: number | string) => void;
  updateItem: (id: number | string, qty: number) => void;
  emptyCart: () => void;
}