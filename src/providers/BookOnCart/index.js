import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const ProductsOnCartContext = createContext([])

export const ProductsOnCartProvider = ({ children }) => {

  const [ productsOnCart, setProductsOnCart ] = useState([])

  const addProductOnCart = (book) => {
    setProductsOnCart([ ...productsOnCart, book ])
    toast.success("Item adicionado ao carrinho!")
  }

  const removeProductFromCart = (book) => {
    const newVitrine = productsOnCart.filter((productToRemove) => productToRemove.name !== book.name);
    setProductsOnCart(newVitrine)
    toast.error("Item deletado do carrinho!")
  }

  return (
    <ProductsOnCartContext.Provider 
      value={{ productsOnCart, addProductOnCart, removeProductFromCart }}>
      { children }
    </ProductsOnCartContext.Provider>
  )
}