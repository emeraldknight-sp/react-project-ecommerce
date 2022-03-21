import { useState } from "react";
import { createContext } from "react";

export const ProductsOnCartContext = createContext([])

export const ProductsOnCartProvider = ({ children }) => {

  const [ productsOnCart, setProductsOnCart ] = useState([])

  const addProductOnCart = (book) => {
    setProductsOnCart([ ...productsOnCart, book ])
  }

  const removeProductFromCart = (book) => {
    const newVitrine = productsOnCart.filter((productToRemove) => productToRemove.name !== book.name);
    setProductsOnCart(newVitrine)
  }

  return (
    <ProductsOnCartContext.Provider 
      value={{ productsOnCart, addProductOnCart, removeProductFromCart }}>
      { children }
    </ProductsOnCartContext.Provider>
  )
}