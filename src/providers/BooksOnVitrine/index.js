import { useState } from "react";
import { createContext } from "react";

export const BooksOnVitrineContext = createContext([])

export const BooksOnVitrineProvider = ({ children }) => {

  const [ books, setBooks ] = useState([
    { 
      name: "Domain-Driven Design: Atacando as complexidades no coração do software", 
      author: "Eric Evans",
      price: 68, 
      image: "https://images-na.ssl-images-amazon.com/images/I/61aIS4n2jZL._AC_UL160_SR160,160_.jpg"
    },
    { 
      name: "Desenvolvimento Ágil Limpo: De volta às origens", 
      author: "Robert C. Martin",
      price: 30, 
      image: "https://images-na.ssl-images-amazon.com/images/I/6106595rrML._AC_UL160_SR160,160_.jpg"
    },
    { 
      name: "Refatoração: Aperfeiçoando o Design de Códigos Existentes", 
      price: 99, 
      author:"Martin Fowler",
      image: "https://images-na.ssl-images-amazon.com/images/I/81sTm5M7wjL._AC_UL160_SR160,160_.jpg"
    },
    { 
      name: "O Codificador Limpo: Um código de conduta para programadores profissionais",
      author: "Robert C. Martin",
      price: 45, 
      image: "https://images-na.ssl-images-amazon.com/images/I/91lBONZ4tAL._AC_UL160_SR160,160_.jpg"
    },
    { 
      name: "Arquitetura Limpa: O guia do artesão para estrutura e design de software", 
      author: "Robert C. Martin", 
      price: 72, 
      image: "https://images-na.ssl-images-amazon.com/images/I/813bXuhUpQL._AC_UL140_SR140,140_.jpg"
    },
    { 
      name: "Código Limpo: Habilidades práticas do Agile Software", 
      author: "Robert C. Martin",
      price: 65, 
      image: "https://images-na.ssl-images-amazon.com/images/I/71JpZHEGvWL._AC_UL140_SR140,140_.jpg"
    }
  ])

  const addToBooksOnVitrine = (book) => {
    setBooks([ ...books, book ])
  }

  const removeFromBooksOnVitrine = (book) => {
    const newVitrine = books.filter((bookToRemove) => bookToRemove.name !== book.name);
    setBooks(newVitrine)
  }

  return (
    <BooksOnVitrineContext.Provider 
      value={{ books, addToBooksOnVitrine, removeFromBooksOnVitrine }}>
      { children }
    </BooksOnVitrineContext.Provider>
  )
}

