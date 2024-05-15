import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: number;
  isAuthenticated: boolean;
  email: string;
  first_name: string;
  last_name: string;
};

export type UserState = {
  user: User;
};

export type UserActions = {
  addUser: (newUser: User) => void;
  removeUser: () => void;
};

const userInitialState: User = {
  id: -1,
  isAuthenticated: false,
  email: "",
  first_name: "",
  last_name: "",
};

export const useUserStore = create<UserState & UserActions>(
  persist(
    (set) => ({
      user: userInitialState,
      addUser: (payload: User) =>
        set((state: UserState) => ({ ...state, user: payload })),
      removeUser: () =>
        set((state: UserState) => ({ ...state, user: userInitialState })),
    }),
    { name: "user-store" }
  ) as any
);

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
};

export type CartState = {
  items: CartItem[];
};

type CartActions = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void
};

const cartInitialState: CartState = {
  items: [],
};

export const useCartStore = create<CartState & CartActions>(
  persist(
    (set) => ({
      ...cartInitialState,
      addToCart: (newItem: CartItem) =>
        set((state: CartState) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { ...newItem, quantity: 1 }],
            };
          }
        }),
      removeFromCart: (id: number) =>
        set((state: CartState) => {
          const itemToRemove = state.items.find((item) => item.id === id);
          if (itemToRemove) {
            if (itemToRemove.quantity > 1) {
              return {
                items: state.items.map((item) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              };
            } else {
              return {
                items: state.items.filter((item) => item.id !== id),
              };
            }
          }
          return state;
        }),
      emptyCart: () =>
        set(() => ({
          items: [],
        })),
    }),
    {
      name: "user-cart-store",
    }
  ) as any
);
