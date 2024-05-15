import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { CartItemType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function which can delete all the cookies
export const deleteAllCookies = () => {
  // removing the refreshToken from cookies
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");
  Cookies.remove("user-cart");
};

export const addItemIntoLocalStorage = (id: number) => {
  const cart = localStorage.getItem("user-cart");

  // If cart isn't available, create a new cart with the new item
  if (!cart) {
    const newCart = [{ id: id, quantity: 1 }];
    localStorage.setItem("user-cart", JSON.stringify(newCart));
  } else {
    const existingCart: CartItemType[] = JSON.parse(cart);

    // Check if the item is present in the existing cart
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === id);

    if (itemIndex !== -1) {
      // Item is present in the cart, update its quantity
      existingCart[itemIndex].quantity++;
    } else {
      // Item is not present in the cart, add it with quantity 1
      existingCart.push({ id: id, quantity: 1 });
    }

    // Update the cart in localStorage
    localStorage.setItem("user-cart", JSON.stringify(existingCart));
  }
};

// function to remove item from cart
export const removeItemFromLocalStorage = (id: number) => {
  const cart = localStorage.getItem("user-cart");

  if (!cart) {
    // Cart is empty, nothing to remove
    return;
  }

  const existingCart: CartItemType[] = JSON.parse(cart);

  // Find the index of the item to remove
  const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === id);

  if (itemIndex !== -1) {
    // Item found in the cart
    if (existingCart[itemIndex].quantity > 1) {
      // Decrement the quantity if it's greater than 1
      existingCart[itemIndex].quantity--;
    } else {
      // Remove the item if the quantity is 1
      existingCart.splice(itemIndex, 1);
    }

    // Update the cart in localStorage
    localStorage.setItem("user-cart", JSON.stringify(existingCart));
  }
};

// function to set the cookie
export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

// function to get the cookie
export const getCookie = (name: string) => {
  return Cookies.get(name);
};

// function to remove the cookie
export const deleteCookie = (name: string) => {
  return Cookies.remove(name);
};
