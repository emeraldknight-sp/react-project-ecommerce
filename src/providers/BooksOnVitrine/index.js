import { useState } from "react";
import { createContext } from "react";

export const BooksOnVitrineContext = createContext([])

export const BooksOnVitrineProvider = ({ children }) => {

  const [ books, setBooks ] = useState([
    { name: "The Witcher - Box", price: 280, image: "https://images-na.ssl-images-amazon.com/images/I/61gUoY6cokL.jpg"},
    { name: "O Senhor dos Anéis - Box", price: 120, image: "https://images-na.ssl-images-amazon.com/images/I/81CIVene1RL.jpg"},
    { name: "Sherlock Holmes - Box", price: 70, image: "https://images-na.ssl-images-amazon.com/images/I/714X4gjNs6L.jpg"},
    { name: "Star Wars: Dark Edition", price: 46, image: "https://images-na.ssl-images-amazon.com/images/I/71sf+k7nCQL.jpg"},
    { name: "Marvel Guerra Civil - Box", price: 35, image: "https://images-na.ssl-images-amazon.com/images/I/71qMpn5jDWL.jpg"}
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

